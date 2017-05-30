<?php
session_name("opengamepanel_web");
session_start();

if(!empty($_SESSION['users_group'])=='admin'){

$f = "theme.config";
$json = json_decode(file_get_contents($f));

$style = $json->{"style"};
$bg_conf = $json->{"custom_bg"};

$stylesheet = "../css/main.css";
if(!empty($_GET['del_custom_bg'])){
	$style_file = "../css/main_".$style.".css";
}else{
	$style_file = "../css/main_".$_POST['style_tab'].".css";
}

$string = file_get_contents($stylesheet);
$replace = file_get_contents($style_file);

$cbgf = realpath(dirname(__FILE__)).'/custom_bg';
if(!file_exists($cbgf)){
	mkdir($cbgf, 0777, true);
}

if(!empty($_GET['del_custom_bg'])){
	if($bg_conf!='no'){
		unlink($cbgf.'/'.$bg_conf);
		if(file_exists($f)){ unlink($f); }
		$json = json_encode(array('style' => $style, 'custom_bg' => 'no'));
		file_put_contents($f, $json);
	}
	$replace = "/* *** THEME STYLER *** */\n".$replace."\n/* *** THEME STYLER END *** */";
	$search = "/\/\* \*\*\* THEME STYLER \*\*\* \*\/(.*)\/\* \*\*\* THEME STYLER END \*\*\* \*\//s";
	file_put_contents($stylesheet, preg_replace($search,$replace,$string));

	exit();
}

if(!empty($_FILES)){
	if($_FILES['bg_file']['error']==0){

		$validextensions = array("jpeg", "jpg", "png");
		$temporary = explode(".", $_FILES["bg_file"]["name"]);
		$file_extension = end($temporary);
		$file_name = 'custom.'.$file_extension;
		$file_complete = $cbgf.'/'.$file_name;
		if ((($_FILES["bg_file"]["type"] == "image/png") || ($_FILES["bg_file"]["type"] == "image/jpg") || ($_FILES["bg_file"]["type"] == "image/jpeg")) && in_array($file_extension, $validextensions)) {
			if ($_FILES["file"]["error"]==0){
				if(file_exists($file_complete)){ unlink($file_complete); }
				move_uploaded_file($_FILES['bg_file']['tmp_name'],$file_complete);
				$bg_conf = $file_name;
			}
		}
	}
}

if(file_exists($f)){ unlink($f); }
$json = json_encode(array('style' => $_POST['style_tab'], 'custom_bg' => $bg_conf));
file_put_contents($f, $json);

if($bg_conf!='no'){
	$replace = preg_replace("/background: url\((.*)\)/", "background: url(../conf/custom_bg/".$bg_conf.")", $replace);
}
$replace = "/* *** THEME STYLER *** */\n".$replace."\n/* *** THEME STYLER END *** */";
$search = "/\/\* \*\*\* THEME STYLER \*\*\* \*\/(.*)\/\* \*\*\* THEME STYLER END \*\*\* \*\//s";
file_put_contents($stylesheet, preg_replace($search,$replace,$string));

}
?>

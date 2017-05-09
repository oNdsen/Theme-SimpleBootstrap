<?php
if(!empty($_GET['style']))
{
        $f = "theme.config";
        if(file_exists($f)){ unlink($f); }
        $json = json_encode(array('style' => $_GET['style']));
        file_put_contents($f, $json);
}
?>

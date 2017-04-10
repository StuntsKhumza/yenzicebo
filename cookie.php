<?php

$data = json_decode(file_get_contents('php://input'));

/*
*/

echo json_encode(array("userid"=>base64_encode("212s54da"), "msg"=>"You are authenticated..."));
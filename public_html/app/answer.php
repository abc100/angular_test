<?php

$answer = json_decode(file_get_contents('php://input'), true);

if (isset($answer['text']) && isset($answer['author']) ) {
    echo json_encode($answer);
}
else {
    echo 'Wrong answer format';
}
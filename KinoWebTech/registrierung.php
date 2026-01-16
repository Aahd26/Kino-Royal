<?php

$vorname = $name = $email = $password = "";
$vornameErr = $nameErr = $emailErr = $passwordErr = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (empty($_POST["vorname"])) {
        $vornameErr = "Feld ist leer!";
    } else{
        $vorname = test_input($_POST["vorname"]);
    }

    if (empty($_POST["name"])){
        $nameErr = "Feld ist leer!";
    } else{
        $name = test_input($_POST["name"]);
    }

    if (empty($_POST["email"])){
        $emailErr = "Feld ist leer!";
    } else{
        $email = test_input($_POST["email"]);
    }

    if (empty($_POST["password"])){
        $passwordErr = "Feld ist leer!";
    } else{
        $password = test_input($_POST["password"]);
    }

}
function test_input($data){
  $data = trim($data);
  $data = stripslashes($data); 
  $data = htmlspecialchars($data);
  return $data;
}

if(!empty($_POST["vorname"]) && !empty($_POST["name"]) && !empty($_POST["email"]) && !empty($_POST["password"])){
  $data = $vorname . '|' . $name . '|' . $email . '|' . $password . "\r\n";
  file_put_contents('registrierungen.txt', $data, FILE_APPEND | LOCK_EX);
  header("Location: http://localhost/KinoWebTech/"); 
  }
else{
  header("Location: http://localhost/KinoWebTech/registrierung.html");
}


?>


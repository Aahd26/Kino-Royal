
<?php 
$file = "registrierungen.txt";
$contents = file_get_contents($file);
$lines = explode("\n", $contents);
$exist = false;
$email = $password = $username = "";
$emailErr = $passwordErr = $usernameErr = "";
$name = "";
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (empty($_POST["email"])){
        $emailErr = "Bitte geben Sie ihre Email ein.";
    } else{
        $email = test_input($_POST["email"]);
    }

    if (empty($_POST["password"])){
        $passwordErr = "Bitte geben Sie ein Passwort an.";
    } else{
        $password = test_input($_POST["password"]);
    }

    

    foreach ($lines as $line) {
        
        $parts = explode('|', $line);
        if (count($parts) >= 3) {
            $storedEmail = trim($parts[2]);
            $storedPassword = trim($parts[3]);
            $storedName = trim($parts[0]);
            if ($storedEmail === $email && $storedPassword === $password){
                $exist = true;
                $name = $storedName;
                break;
            }
        }
    }
  
}


function test_input($data){
  $data = trim($data);
  $data = stripslashes($data); 
  $data = htmlspecialchars($data);
  return $data;
}
if(!$exist){
  header("Location: http://localhost/KinoWebTech/login.html");
}
?>


<script>
  var exist = "<?php echo $exist; ?>";
  if (exist){
      var name = "<?php echo $name; ?>";
      localStorage.setItem("userName", name);
      var email = "<?php echo $email; ?>";
      localStorage.setItem("email", email);
      window.location.href = "index.html";
    }
</script>


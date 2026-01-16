<?php



if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    if (!empty($_POST['userName'])) {
        
        echo "redirect";
    } else {
        
        echo "No userName received.";
    }
} 
?>






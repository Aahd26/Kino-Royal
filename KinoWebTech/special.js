document.addEventListener("DOMContentLoaded", function() {
    
    const addToCartButton = document.querySelector(".ticket-horror");
  
    addToCartButton.addEventListener("click", function() {
        
        const userName = localStorage.getItem("userName");

        
        const data = new FormData();
        if (userName) {
            data.append("userName", userName);
        }
  
        fetch("film.php", {
            method: "POST",
            body: data
        })
        .then(response => response.text()) 
        .then(data => {
            console.log("Server Response: ", data); 

            const trimmedData = data.trim();
            if (trimmedData === "redirect") {
                console.log("Redirecting to tickets-kaufen.html...");
                window.location.href = "tickets-kaufen.html";
            }
             
            else if (trimmedData === "No userName received.") {
                console.log("Redirecting to login.php...");
                window.location.href = "login.php";
            }
        })
        .catch(error => {
            console.error("Error: ", error); 
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    
    const addToCartButton = document.querySelector(".ticket-anime");
  
    addToCartButton.addEventListener("click", function() {
        
        const userName = localStorage.getItem("userName");

        
        const data = new FormData();
        if (userName) {
            data.append("userName", userName);
        }
  
        fetch("film.php", {
            method: "POST",
            body: data
        })
        .then(response => response.text()) 
        .then(data => {
            console.log("Server Response: ", data); 

            const trimmedData = data.trim();
            if (trimmedData === "redirect") {
                console.log("Redirecting to tickets-kaufen.html...");
                window.location.href = "tickets-kaufen.html";
            }
             
            else if (trimmedData === "No userName received.") {
                console.log("Redirecting to login.php...");
                window.location.href = "login.php";
            }
        })
        .catch(error => {
            console.error("Error: ", error); 
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    
    const addToCartButton = document.querySelector(".ticket-klassiker");
  
    addToCartButton.addEventListener("click", function() {
        
        const userName = localStorage.getItem("userName");

        
        const data = new FormData();
        if (userName) {
            data.append("userName", userName);
        }
  
        fetch("film.php", {
            method: "POST",
            body: data
        })
        .then(response => response.text()) 
        .then(data => {
            console.log("Server Response: ", data); 

            const trimmedData = data.trim();
            if (trimmedData === "redirect") {
                console.log("Redirecting to tickets-kaufen.html...");
                window.location.href = "tickets-kaufen.html";
            }
             
            else if (trimmedData === "No userName received.") {
                console.log("Redirecting to login.php...");
                window.location.href = "login.php";
            }
        })
        .catch(error => {
            console.error("Error: ", error); 
        });
    });
});

  


window.addEventListener("DOMContentLoaded", () => {
    const userName = localStorage.getItem("userName");
    const kontoDiv = document.querySelector(".konto");
    const loggedInDiv = document.getElementById("logged-in");
  
    if (userName) {
        
        kontoDiv.style.display = "none";
        loggedInDiv.style.display = "block";
  
        
        document.getElementById("user-name").textContent = `Logged in as ${userName}`;
        document.getElementById("user-link").textContent = userName;
    }
  });
  
  const logoutLink = document.createElement("a");
  logoutLink.href = "#";
  logoutLink.textContent = "Logout";
  logoutLink.style.marginLeft = "10px";
  
  logoutLink.addEventListener("click", () => {
      
      localStorage.removeItem("userName");
      window.location.reload();
  });
  
  document.getElementById("logged-in").appendChild(logoutLink);
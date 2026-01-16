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




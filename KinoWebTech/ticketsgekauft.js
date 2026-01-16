document.querySelector(".hauptseite-btn").addEventListener("click", (event) => {
  event.preventDefault(); 

      window.location.href = "index.html";

});


document.addEventListener("DOMContentLoaded", () => {
  
  const erwachsene = parseInt(localStorage.getItem("erwachsene")) || 0;
  const studenten = parseInt(localStorage.getItem("studenten")) || 0;
  const kinder = parseInt(localStorage.getItem("kinder")) || 0;
  const senioren = parseInt(localStorage.getItem("senioren")) || 0;
  const totalTickets = parseInt(localStorage.getItem("totalTickets")) || 0;
  const totalPrice = parseInt(localStorage.getItem("totalPrice")) || 0;

  
  document.getElementById("summary-erwachsene").textContent = erwachsene;
  document.getElementById("summary-studenten").textContent = studenten;
  document.getElementById("summary-kinder").textContent = kinder;
  document.getElementById("summary-senioren").textContent = senioren;
  document.getElementById("summary-totalTickets").textContent = totalTickets;
  document.getElementById("summary-totalPrice").textContent = totalPrice;

  
 
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

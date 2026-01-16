document.querySelector(".ticketskaufen-btn").addEventListener("click", (event) => {
  event.preventDefault(); 

  
  const erwachsene = parseInt(document.getElementById("erwachsene").value) || 0;
  const studenten = parseInt(document.getElementById("studenten").value) || 0;
  const kinder = parseInt(document.getElementById("kinder").value) || 0;
  const senioren = parseInt(document.getElementById("senioren").value) || 0;
  const agb = document.getElementById("agb");
  
  if ((erwachsene > 0 || studenten > 0 || kinder > 0 || senioren > 0) && agb.checked) {
      

      const totalTickets = erwachsene + studenten + kinder + senioren;
      const totalPrice = erwachsene * 12 + studenten * 10 + kinder * 8 + senioren * 8;
      
      localStorage.setItem("erwachsene", erwachsene);
      localStorage.setItem("studenten", studenten);
      localStorage.setItem("kinder", kinder);
      localStorage.setItem("senioren", senioren);
      localStorage.setItem("totalTickets", totalTickets);
      localStorage.setItem("totalPrice", totalPrice);


      
      window.location.href = "ticketsgekauft.html";
  } else {
      alert("Bitte wählen Sie Tickets aus und aktzeptieren Sie die AGB.");
  }
});



function updateSummary() {
  
  const prices = {
    erwachsene: 12,
    studenten: 10,
    kinder: 8,
    senioren: 8,
  };

  
  const erwachsene = parseInt(document.getElementById("erwachsene").value) || 0;
  const studenten = parseInt(document.getElementById("studenten").value) || 0;
  const kinder = parseInt(document.getElementById("kinder").value) || 0;
  const senioren = parseInt(document.getElementById("senioren").value) || 0;

  
  const totalTickets = erwachsene + studenten + kinder + senioren;
  const totalPrice =
    erwachsene * prices.erwachsene +
    studenten * prices.studenten +
    kinder * prices.kinder +
    senioren * prices.senioren;

  
  document.getElementById("total-tickets").textContent = `Gesamtanzahl der Tickets: ${totalTickets}`;
  document.getElementById("total-price").textContent = `Gesamtpreis: ${totalPrice}€`;
}


document.getElementById("erwachsene").addEventListener("input", updateSummary);
document.getElementById("studenten").addEventListener("input", updateSummary);
document.getElementById("kinder").addEventListener("input", updateSummary);
document.getElementById("senioren").addEventListener("input", updateSummary);


updateSummary();

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

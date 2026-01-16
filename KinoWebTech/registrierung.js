document.querySelector(".registrieren-btn").addEventListener("click", (event) => {
  

  
  const vorname = document.getElementById("vorname").value.trim();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  
  if (vorname && name && email && password) {
      
      localStorage.setItem("userName", vorname);
      localStorage.setItem("email", email)
      
      
  } 
});

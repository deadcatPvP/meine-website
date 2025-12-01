document.getElementById("helloBtn").addEventListener("click", function() {
  alert("Hallo!");
}); 

// script.js
document.getElementById("setText").addEventListener("click", function(){
  document.getElementById("info").innerHTML = "Das ist mein neuer Text!";
});


// script.js
document.getElementById("askName").addEventListener("click", function(){
  let name = prompt("Wie heißt du?");
  document.getElementById("greet").innerText = "Hallo " + name + "!";
});

// script.js
document.getElementById("swap").addEventListener("click", function(){
  const img = document.getElementById("photo");
  img.src = (img.src.includes("bild1.jpg")) ? "htmlbild2.jpg" : "htmlbild1.jpg";
});


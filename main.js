//Botton principal
function mostrar() {
    let div = document.getElementById("invisible");
    var button = document.getElementById("mostrar");

    if (div.style.display === "none" || div.style.display === "") {
        div.style.display = "flex"; 
        button.textContent = "LEER MENOS";
    } else {
        div.style.display = "none";
        button.textContent = "LEER MAS"; 
    }
}

function toggleImages() {
    var imageContainer = document.getElementById("imageContainer");


    if (imageContainer.style.display === "none" || imageContainer.style.display === "") {
        imageContainer.style.display = "flex";

    } else {
        imageContainer.style.display = "none";
  
    }
}




const profileContainer = document.getElementById("profile-container");

const profileCard = document.createElement("div");
const img = document.createElement("img");
const name = document.createElement("h2");
const bio = document.createElement("p");

img.src = "image.png";
img.alt = "Ronn Gardoce";

name.textContent = "Ronn Gardoce";
bio.textContent = "BSIS Student | Aspiring AI Engineer";

profileCard.className = "profile-card";
img.className = "avatar";
name.className = "student-name";
bio.className = "student-bio";

profileCard.appendChild(img);
profileCard.appendChild(name);
profileCard.appendChild(bio);

profileContainer.appendChild(profileCard);



const nameInput = document.getElementById("nameInput");
const welcomeMessage = document.getElementById("welcomeMessage");

nameInput.addEventListener("input", function() {
    welcomeMessage.textContent = "Hello, " + nameInput.value;
});



const studentForm = document.getElementById("studentForm");
const courseInput = document.getElementById("courseInput");

studentForm.addEventListener("submit", function(event) {

    event.preventDefault();

    welcomeMessage.textContent =
        "Welcome " + nameInput.value + "! You are registered in " + courseInput.value + ".";
});



const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", function() {

    document.body.classList.toggle("dark");

});



document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        welcomeMessage.textContent = "";

    }

});
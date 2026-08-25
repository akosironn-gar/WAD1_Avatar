const profileContainer = document.getElementById("profile-container");
const profileCard = document.createElement("div");
const avatar = document.createElement("img");
const name = document.createElement("h2");
const bio = document.createElement("p");

avatar.src = "image.png";
avatar.alt = "Ronn Gardoce";
name.textContent = "Ronn Gardoce";
bio.textContent = "BSIS Student | Aspiring AI Engineer";

profileCard.className = "profile-card";
avatar.className = "avatar";
name.className = "student-name";
bio.className = "student-bio";

profileCard.appendChild(avatar);
profileCard.appendChild(name);
profileCard.appendChild(bio);


profileContainer.appendChild(profileCard); 
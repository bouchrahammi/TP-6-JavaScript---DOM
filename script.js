const nouvelleDiv = document.createElement('div');
const paragraphe = document.createElement('p');

paragraphe.textContent = "Ceci est un paragraphe";

nouvelleDiv.appendChild(paragraphe);
document.getElementById('container').appendChild(nouvelleDiv);

paragraphe.textContent = "Le texte a été modifié";

paragraphe.style.backgroundColor = "lightblue";
paragraphe.style.textAlign = "center";
paragraphe.style.padding = "20px"; 

nouvelleDiv.addEventListener('click', () => {
    paragraphe.textContent = "Un clic a été détecté";
});

const text = document.getElementById("text");
const title = document.getElementById("title");

text.onmouseover = function () {
    text.innerHTML = 
    "Le produit sort le 1 juillet 2022";
    title.innerHTML = "voir plus";
}
text.onmouseout = function () {
    text.innerHTML = 
    "Si vous voulez plus d'informations passez votre souris ici";
    title.innerHTML = "voir plus";
}
console.log(text)
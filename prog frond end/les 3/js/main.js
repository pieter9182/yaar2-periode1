const dancing = document.getElementById("js--dancing");
const lato = document.getElementById("js--lato");
const playfair = document.getElementById ("js--Playfair");
const input = document.getElementById("js--input");
const toggle = document.getElementById("toggle");
const header = document.getElementById("header");
const showcase = document.getElementById("showcase");


input.oninput = function(event){
    dancing.innerText = event.target.value;
    lato.innerText = event.target.value;
    playfair.innerText = event.target.value;
}

toggle.addEventListener("change",function(){ 
    if (toggle.checked == true) {
        header.classList.add("header__darkmode");
        showcase.classList.add("showcase__darkmode");
        input.classList.add("showcase__input__darkmode");


    } 
    if (toggle.checked == false) {
        header.classList.remove("header__darkmode");
        showcase.classList.remove("showcase__darkmode");
        input.classList.remove("showcase__input__darkmode");
    }
})

/*java for favourites */
const hearts = document.getElementsByClassName("heart");
for(let i = 0; i < hearts.length; i++){
    hearts[i].onclick = function(event) {
        for(let i = 0; i < hearts.length; i++){
            hearts[i].children[0].classList = "fa-regular fa-heart heart__logo"    
        }
        hearts[i].children[0].classList = "fa-solid fa-heart heart__logo";
    }
}


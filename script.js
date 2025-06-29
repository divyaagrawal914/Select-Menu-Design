const selectField = document.getElementById("select-field");
const selectText = document.getElementById("select-text");
const options = document.getElementsByClassName("options");
const lists = document.getElementById("lists");
const arrowIcon = document.getElementById("arrow-icon");

for (const option of options) {

    selectField.onclick = function(){
        lists.style.visibility = "visible";
        arrowIcon.classList.toggle("rotate");
    }
   
    option.onclick = function(){
        selectText.innerHTML = this.textContent;
         lists.style.visibility = "hidden";
        arrowIcon.classList.toggle("rotate");

    }
}
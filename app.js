let ul = document.querySelector("ul");
let inp = document.querySelector("input");
let btn = document.querySelector("button");


btn.addEventListener("click", function() {
    let item = document.createElement("li");
    item.innerText = inp.value;
    ul.appendChild(item); 
    inp.value = "";

    let btnDel = document.createElement("button");
    btnDel.innerText = "delete"
    btnDel.classList.add(".del")
    item.appendChild(btnDel);

    
})

ul.addEventListener("click", function(event) {
    if(event.target.nodeName == "BUTTON") {
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("deleted");
    }
})



const list = document.querySelector("ul")
const buttonForEach = document.querySelector(".foreach")
let li = ""


function foreach() {
    menuOptions.forEach((product) => {
        li = li + `
        <li> 
        <img src=${product.src}>
        <p> ${product.name} </p>
        <h3> ${product.price} </h3>
        <h2 class="lanche"> ${product.lanche} </h2>
        </li>
        `

    })

    list.innerHTML = li

}

buttonForEach.addEventListener("click", foreach)

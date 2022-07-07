/*
    Template: Aragon Technology
    made by : Ahmed Elmohtarif
    website : https://elmohtarif2410.github.io/My-portofolio
    deat finsh : it's not finsh
*/

/********************************************************
################## Home page script #####################
********************************************************/

/******************* Buttons Actions ********************/

// Reset Varible
let landdingButtonMore = document.querySelectorAll(".landding .carousel-item button");

landdingButtonMore.forEach((button) => {
    button.onclick = _ => {
        window.location.href = "/projects"
    }
})
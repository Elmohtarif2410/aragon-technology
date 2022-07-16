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
let scrollToTopButton = document.getElementById("scroll_to_top");

// button learn more to landding section
landdingButtonMore.forEach((button) => {
    button.onclick = _ => {
        window.location.href = "/projects"
    }
})

// Show and hide button when windwo on scroll
window.addEventListener("scroll", () => {
     // function button scroll top page
     if (window.scrollY >= 700) {

        scrollToTopButton.style.display = "flex";

    } else {

        scrollToTopButton.style.display = "none";
    }
})

// top page bottun on click action
scrollToTopButton.onclick =  _ => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    })
}









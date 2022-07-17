/*
    Template: Aragon Technology
    made by : Ahmed Elmohtarif
    website : https://elmohtarif2410.github.io/My-portofolio
    deat finsh : it's not finsh
*/

/********************************************************
################## Animation action #####################
********************************************************/

/******************* Main heading animation ********************/

// Reset Varible
let mainHeadingElementsAll = document.querySelectorAll(".main-heading");
let elementsAnmationScrollAll = document.querySelectorAll(".anmation")
// Extra vertical space so that the animation appears well
let addHeightOffset = 100;

// actions is happening when window scrolling
window.addEventListener("scroll", () => {
    // Dimensions for window
    let windowScrollY = window.scrollY;
    let windowInnerHeight = window.innerHeight;

    // main heading Anmaition
    mainHeadingElementsAll.forEach((heading) => {
        // Dimensions for Element
        let headingOffsetTop = heading.offsetTop;
        let headingOffsetHeight = heading.offsetHeight;
        // When the item is reached, the animation occurs
        if (windowScrollY > (headingOffsetTop + headingOffsetHeight - windowInnerHeight + addHeightOffset)) {
            heading.style.animationPlayState = "running";
        }
    })    

    // All Elements Anmation
    elementsAnmationScrollAll.forEach((element) => {
        // Dimensions for Element
        let elementOffsetTop = element.offsetTop;
        let elementOffsetHeight = element.offsetHeight;
        // When the item is reached, the animation occurs
        if (windowScrollY > (elementOffsetTop + elementOffsetHeight - windowInnerHeight + addHeightOffset)) {
            element.style.animationPlayState = "running";
        }
    })  
});





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



















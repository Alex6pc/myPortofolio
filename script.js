// ---- Change Hover for the button in project section
const buttonLive = document.getElementsByClassName("projectBtn live");
const buttonGit = document.getElementsByClassName("projectBtn github");


for(let i = 0; i < buttonLive.length; i++){
    buttonGit[i].addEventListener("mouseover", () =>{
        buttonLive[i].style.background = "black";
        buttonLive[i].style.border = "none";
    } ) 
    buttonGit[i].addEventListener("mouseout", () =>{
        buttonLive[i].style.background = "none";
        buttonLive[i].style.border = "2px solid #fff";
    } ) 
}

// ------------------------------------------------------
// ---- NAV BAR LINKS

// const links = document.querySelectorAll(".link");
// const sections = document.querySelectorAll(".section");

// let activeLink = 0;

// links.forEach((link, i) => {
//     link.addEventListener("click", () => {
//         if(activeLink != i){
//             links[activeLink].classList.remove("active");
//             link.classList.add("active");
//             sections[activeLink].classList.remove("active");

//             setTimeout(() => {
//                 activeLink = i;
//                 sections[i].classList.add("active");
//             }, 1000);
//         }
//     })
// })

// -------------------------------------------------------------
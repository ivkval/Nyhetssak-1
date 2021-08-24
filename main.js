let divs = document.querySelectorAll("div");
   
function isVisible(element) {
    let box = element.getBoundingClientRect();
    if (box.top > -60 && box.top < window.innerHeight - 180) {
        return true 
    } else {
        return false
    }
}

function check() {
    let divList = document.querySelectorAll(".visible");
    divList.forEach(div => {
        if (isVisible(div)) {
            div.classList.remove("hidden");
        } else {
            div.classList.add("hidden");
        }
    })
}

window.onload = () => {
    divs.forEach((div) => {
        let box = div.getBoundingClientRect();
        div.classList.add("visible");
        if (!(box.top > -60 && box.top < window.innerHeight - 180)) {
            div.classList.add("hidden");
        }    
    })
}

document.addEventListener("scroll", check);
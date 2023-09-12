function myChangeBackgroundColor() {

    window.addEventListener("resize", myChangeBackgroundColor);
    
    let width = window.innerWidth;

    if (width <= 504) {
        document.documentElement.style.backgroundColor = "#003049";
    } else if (width >= 1337) {
        document.documentElement.style.backgroundColor = "#ffb703";
    } else if (width >= 505 && width <= 1336) {
        document.documentElement.style.backgroundColor = "#d90429";
    }

}

window.addEventListener("resize", myChangeBackgroundColor);

myChangeBackgroundColor();
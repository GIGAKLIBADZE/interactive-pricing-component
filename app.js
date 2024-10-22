const price = [...document.getElementsByClassName("money")];
const regulationRange = document.getElementById("regulation");
const slashAndMonth = [...document.getElementsByClassName("month")];
const views = [...document.getElementsByClassName("pageviews")];
const check = document.getElementById("monthly-regulation");
const discountPrice = [...document.getElementsByClassName("percentage")];
const saleDiv = [...document.getElementsByClassName("sale")];

let checkMark = false;
let switchNumber = 0;

regulationRange.style.background = `linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) 10%, hsl(224, 65%, 95%) 65%, hsl(224, 65%, 95%) 100%)`;

function calc() {
    let sliderValue = regulationRange.value;
    let percentage = ((sliderValue - regulationRange.min) / (regulationRange.max - regulationRange.min)) * 100;


    regulationRange.style.background = `linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) ${percentage}%, hsl(224, 65%, 95%) ${percentage}%, hsl(224, 65%, 95%) 100%)`;

    if (checkMark) {
        if (switchNumber === 1) {
            price.forEach((p) => {
                p.firstChild.textContent = "$6.00";
            });
        } else if (switchNumber === 2) {
            price.forEach((p) => {
                p.firstChild.textContent = "$9.00";
            });
        } else if (switchNumber === 3) {   
            price.forEach((p) => {
                p.firstChild.textContent = "$12.00";
            });
        } else if (switchNumber === 4) {  
            price.forEach((p) => {
                p.firstChild.textContent = "$18.00";
            });
        } else if (switchNumber === 5) {   
            price.forEach((p) => {
                p.firstChild.textContent = "$27.00";
            });
        }
    } else {
        if (switchNumber === 1) {
            views.forEach((pv) => {
                pv.textContent = "10k pageviews";
            });
    
            price.forEach((p) => {
                p.firstChild.textContent = "$8.00";
            });
        } else if (switchNumber === 2) {
            views.forEach((pv) => {
                pv.textContent = "50k pageviews";
            });
    
            price.forEach((p) => {
                p.firstChild.textContent = "$12.00";
            });
        } else if (switchNumber === 3) {
            views.forEach((pv) => {
                pv.textContent = "100k pageviews";
            });
    
            price.forEach((p) => {
                p.firstChild.textContent = "$16.00";
            });
        } else if (switchNumber === 4) {
            views.forEach((pv) => {
                pv.textContent = "500k pageviews";
            });
    
            price.forEach((p) => {
                p.firstChild.textContent = "$24.00";
            });
        } else if (switchNumber === 5) {
            views.forEach((pv) => {
                pv.textContent = "1m pageviews";
            });
    
            price.forEach((p) => {
                p.firstChild.textContent = "$36.00";
            });
        }
    }
}

regulationRange.addEventListener("change", (event) => {
    switchNumber = parseInt(event.target.value); 

    calc();
});

check.addEventListener("change", (event) => {
    checkMark = event.target.checked;
    
    if (checkMark) {
        discountPrice.forEach((s) => {
            s.textContent = "25% discount";
        });

        saleDiv.forEach((s) => {
            s.style.width = "93px";
        });
    } else {
        discountPrice.forEach((s) => {
            s.textContent = "25%";
        });

        saleDiv.forEach((s) => {
            s.style.width = "41px";
        });   
    }

    calc();
}); 
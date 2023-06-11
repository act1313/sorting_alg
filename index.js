let sort_btn = document.querySelector(".sort");
let array_slider = document.querySelector("#changeSize");
let sorting_area = document.querySelector(".sorting_area");
let arr = [];
let width = sorting_area.offsetWidth;
let height = sorting_area.offsetHeight;
let current_bars = 0;
let number_of_bars = 0;

let alg = "";

let bubblesort = document.querySelector("#bubble");



bubblesort.addEventListener("click", () => {
    alg = "bubble";
    bubblesort();
});

array_slider.addEventListener("input", () => {
    width = sorting_area.offsetWidth;
    height = sorting_area.offsetHeight;
    number_of_bars = array_slider.value;
    changeBars(number_of_bars);
});

function changeBars(num) {
    let pos = 0;
    arr = [];
    sorting_area.innerHTML = '';
    for (let i = 0; i < num; i++) {
        let barheight = Math.round(Math.random() * height);
        if (barheight == 0) {
            barheight = 1;
        }
        let barwidth = width / num;
        let bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = `${barheight}px`;
        bar.style.width  = `${barwidth}px`;
        sorting_area.appendChild(bar);
        arr.push(barheight);
        bar.style.position = "absolute";
        bar.style.left = pos + "px";
        pos += width / number_of_bars;
        bar.setAttribute('index', i);
    }
    console.log(arr);
}

function bubblesort() {
    
}
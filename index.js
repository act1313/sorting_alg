let sort_btn = document.querySelector(".sort");
let array_slider = document.querySelector("#changeSize");
let sorting_area = document.querySelector(".sorting_area");
let arr = [];

let width = sorting_area.offsetWidth;
let height = sorting_area.offsetHeight;
let current_bars = 0;
let number_of_bars = 0;

let running = false;

let bubblesortbtn = document.querySelector("#bubble");
let quicksortbtn = document.querySelector("#quick");
let mergesortbtn = document.querySelector("#merge");
let heapsortbtn = document.querySelector("#heap");
let insertsortbtn = document.querySelector("#insertion");
let selectionsortbtn = document.querySelector("#selection");

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

bubblesortbtn.addEventListener("click", () => {
    if (!running) {
        bubblesort();
    }
});

quicksortbtn.addEventListener("click", () => {
    if (!running) {
        quicksort(arr, 0, arr.length - 1);
        console.log(arr);
    }
});

mergesortbtn.addEventListener("click", () => {
    if (!running) {
        mergesort();
    }
});

heapsortbtn.addEventListener("click", () => {
    if (!running) {
        heapsort();
    }
});

insertsortbtn.addEventListener("click", () => {
    if (!running) {
        insertionsort();
    }
});

selectionsortbtn.addEventListener("click", () => {
    if (!running) {
        selectionsort();
    }
});

array_slider.addEventListener("input", () => {
    if (!running) {
        width = sorting_area.offsetWidth;
        height = sorting_area.offsetHeight;
        number_of_bars = array_slider.value;
        changeBars(number_of_bars);
    }
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
}

async function bubblesort() {
    console.log(arr);
    running = true;
    let children = sorting_area.children;
    let temp;
    let tempchild;
    let swapped = false;
    for (var i = 0; i < children.length; i++) {
        swapped = false;
        for (var j = 0; j < children.length; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
                swapped = true;

                tempchild = children[j + 1].style.height;
                children[j + 1].style.height = children[j].style.height;
                children[j].style.height = tempchild;
                await sleep(1000 / children.length);
            }
        }
        if (!swapped) {
            break;
        }
    }
    console.log(arr);
    running = false;
}

function quicksort(array, start, end) {
    if (end <= start) {
        return;
    }

    let pivot = partition(array, start, end);
    quicksort(array, start, pivot - 1); // Updated recursive call
    quicksort(array, pivot + 1, end); // Updated recursive call
}

function partition(array, start, end) {
    let bars = sorting_area.children;

    let pivot = array[end];
    let i = start - 1;
    for (let j = start; j <= end - 1; j++) {
        if (array[j] < pivot) {
            i++;
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;

            let tempchild = bars[i].style.height;
            bars[i].style.height = bars[j].style.height;
            bars[j].style.height = tempchild;
            
        }
    }
    i++;
    let temp = array[i];
    array[i] = array[end];
    array[end] = temp;

    let tempchild = bars[i].style.height;
    bars[i].style.height = bars[end].style.height;
    bars[end].style.height = tempchild;

    return i; // returns the pivot index
}
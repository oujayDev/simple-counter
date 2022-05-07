// change the text inside the h2 upon clicking the increment or decrement button
let countId = document.getElementById("count-id");
let count = 0;
// any number on the h2 must be save to p (previous entries) 
let saveId = document.getElementById("save-id");



function increment() {
    count += 1;
    countId.textContent = count;
}

function decrement() {
    count -= 1;
    countId.textContent = count;
    
    if (count < 0) {
        countId.textContent = 0;
        count = 0;
    }
        
}

function save() {
    let counter = count + " - ";
    saveId.textContent += counter;

    //after clicking save, counter will set 0
    countId.textContent = 0;
    count = 0;
}


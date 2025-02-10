let main = document.getElementById("main1");
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let h1 = document.getElementById("h1");
let img1 = document.getElementById("img1")
let count = 0
function woohoo() {
    h1.innerText = "WOOOHOOOOOO!!!!!!!!!"
    let text = document.createElement("h1")
    text.innerHTML = "I love you! 💖"
    button1.remove();
    button2.remove();
    let img2 = document.createElement("img")
    img2.src = "ending.gif"
    img1.remove()
    main.appendChild(img2);
    main.appendChild(text);
}

function again() {
    button1.style.minWidth = button1.offsetWidth * 2 + "px";
    button1.style.minHeight = button1.offsetHeight * 2 + "px";
    let currentSize = window.getComputedStyle(button1).fontSize;
    button1.style.fontSize = parseFloat(currentSize) * 2 + "px";
    count++;
    if (count === 3)
        img1.remove();
    if (count === 4)
        button2.remove();
}

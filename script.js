function changecolor(){
    const box = document.getElementById("box");
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    box.style.backgroundColor = randomColor;
}
const box1 = document.getElementById("box");
box1.addEventListener("click", event => {
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "No Noooo! 😗"
})
box1.addEventListener("mouseover", event => {
    event.target.style.backgroundColor = "yellow";
    event.target.textContent = "Dont do it 😉"
})
box1.addEventListener("mouseout", event => {
    event.target.style.backgroundColor = "blue";
    event.target.textContent = "Fuckk!!!! 🤣"
})


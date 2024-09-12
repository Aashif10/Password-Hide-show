let input = document.getElementById("input")
let button = document.getElementById("button")

button.addEventListener("click", () => {
    if (input.type === "password") {
        input.type = "text";
        button.textContent = "Hide"
        button.style.color = "red";
        
    }

    else {
        if (input.type === "text")
            input.type = "password";
        button.textContent = "Show";
        button.style.color="green"
}
})
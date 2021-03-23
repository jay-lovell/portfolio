const bear = document.getElementById("secret-bear");
let counter = 0;


bear.addEventListener("click", () => {
    counter++;
    if (counter > 5) {
        window.location.href = "index2.html"
    }
})
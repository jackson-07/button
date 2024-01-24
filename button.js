const buttons = document.querySelectorAll("button");
    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            // alert("Thank you!");
            button.textContent = "Liked!";
            button.style.backgroundColor = "blue";
        });
});

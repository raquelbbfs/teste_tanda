document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("demoForm");
    const emailInput = document.getElementById("email");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const emailValue = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(emailValue)) {
            emailInput.classList.add("is-invalid");
            return;
        }

        emailInput.classList.remove("is-invalid");
        alert("Sua solicitação foi enviada com sucesso!");
        form.reset();
    });

});

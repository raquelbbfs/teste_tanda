document.getElementById("demoForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;

    if (email === "" || !email.includes("@")) {
        alert("Por favor, insira um e-mail válido.");
        return;
    }

    alert("Sua solicitação foi enviada com sucesso!");
});

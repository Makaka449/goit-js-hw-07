const form = document.querySelector(".login-form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault(); 
    
    const elements = event.target.elements;

    const info = {
        email: elements.email.value,
        password: elements.password.value
    };

    console.log(info);

    event.target.reset();
}

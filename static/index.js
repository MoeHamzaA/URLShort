// static/index.js
function collapseForm(event) {
    const longUrlInput = document.querySelector('input[name="long_url"]');
    if (longUrlInput.value.trim() === "") {
        event.preventDefault(); // Prevent form submission if input is empty
        alert("Please enter a URL.");
    } else {
        document.getElementById('formContainer').classList.add('collapse');
    }
}

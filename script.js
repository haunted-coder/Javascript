function validateForm() {
    // Get values from the form
    const name = document.getElementById("name").value;
    const age = parseInt(document.getElementById("age").value);

    // Check if name is valid
    if (name.trim() === "") {
        alert("Name is required.");
        return false;
    }

    // Check if age is 18 or greater
    if (isNaN(age) || age < 18) {
        alert("You must be 18 or older to submit this form.");
        return false;
    }

    // If everything is valid, allow form submission
    return true;
}
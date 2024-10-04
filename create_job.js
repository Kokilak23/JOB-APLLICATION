document.getElementById("jobForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    const title = document.getElementById("title").value.trim();
    const type = document.getElementById("type").value;
    const department = document.getElementById("department").value;
    const country = document.getElementById("country").value;
    const description = document.getElementById("description").value.trim();
    const openingDate = new Date(document.getElementById("openingDate").value);
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Reset time for today

    // Validate required fields
    if (!title || !type || !department || !country || !description) {
        alert("Please fill in all required fields.");
        return;
    }

    // Validate opening date
    if (isNaN(openingDate) || openingDate > today) {
        alert("Please enter a valid opening date that is not greater than today.");
        return;
    }

    alert("Job data submitted successfully!");
    // Here you can add code to actually submit the data, e.g., via an AJAX request
});
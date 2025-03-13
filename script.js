function generatePreview() {
    // Get form values
    let name = document.getElementById("name").value.trim();
    let week = document.getElementById("week").value;
    let tasks = document.getElementById("tasks").value.trim();
    let learnings = document.getElementById("learnings").value.trim();
    let challenges = document.getElementById("challenges").value.trim();
    let plan = document.getElementById("plan").value.trim();

    // Validate form fields
    if (!name || !week || !tasks || !learnings || !challenges || !plan) {
        alert("Please fill in all fields before submitting.");
        return;
    }

    // Generate preview content
    let previewContent = `
    Name: ${name}
    Week Number: ${week}

    Tasks Performed:
    ${tasks}

    Key Learnings:
    ${learnings}

    Challenges Faced:
    ${challenges}

    Plan for Next Week:
    ${plan}
    `;

    // Display preview
    document.getElementById("previewContent").textContent = previewContent;
    document.getElementById("preview").style.display = "block";
}

function downloadReport() {
    let previewText = document.getElementById("previewContent").textContent;
    
    if (!previewText) {
        alert("Please submit the form to generate a report before downloading.");
        return;
    }

    let blob = new Blob([previewText], { type: "text/plain" });
    let anchor = document.createElement("a");
    anchor.href = URL.createObjectURL(blob);
    anchor.download = "Weekly_Report.txt";
    anchor.click();
}

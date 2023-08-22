document.addEventListener("DOMContentLoaded", function () {
    const calculateButton = document.getElementById("calculateButton");
    const gbField = document.getElementById("gbField");
    const resultDiv = document.getElementById("result");

    calculateButton.addEventListener("click", function () {
        const inputGB = parseInt(gbField.value);
        
        if (!isNaN(inputGB)) {
            const resultKB = inputGB * 1024;
            resultDiv.textContent = `${inputGB} GB is equal to ${resultKB} KB.`;
        } else {
            resultDiv.textContent = "Please enter a valid integer.";
        }
    });
});

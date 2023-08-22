document.addEventListener("DOMContentLoaded", function () {
    const calculateButton = document.getElementById("calculateButton");
    const gbField = document.getElementById("gbField");
    const resultDiv = document.getElementById("result");

    calculateButton.addEventListener("click", function () {
        const inputGB = parseInt(gbField.value);
        
        if (!isNaN(inputGB)) {
            const resultMB = inputGB * 1024;
            resultDiv.textContent = `${inputGB} GB = ${resultKB} MB.`;
        } else {
            resultDiv.textContent = "Please enter a valid integer.";
        }
    });
});

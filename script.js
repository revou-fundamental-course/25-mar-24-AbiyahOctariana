// Function to calculate BMI
function calculateBMI(height, weight, gender) {
    // Convert height from cm to meters
    var heightMeters = height / 100;
    // Calculate BMI
    var bmi = weight / (heightMeters * heightMeters);
    // Return BMI value
    return bmi.toFixed(2);
}

// Function to display BMI result
function displayResult(bmi, gender) {
    var resultElement = document.getElementById("result");
    var interpretation = "";
    if (gender === "male") {
        if (bmi < 18.5) {
            interpretation = "Underweight";
        } else if (bmi >= 18.5 && bmi < 25) {
            interpretation = "Normal weight";
        } else if (bmi >= 25 && bmi < 30) {
            interpretation = "Overweight";
        } else {
            interpretation = "Obese";
        }
    } else {
        if (bmi < 18.5) {
            interpretation = "Underweight";
        } else if (bmi >= 18.5 && bmi < 24) {
            interpretation = "Normal weight";
        } else if (bmi >= 24 && bmi < 29) {
            interpretation = "Overweight";
        } else {
            interpretation = "Obese";
        }
    }
    resultElement.innerText = "Your BMI is " + bmi + ". This is considered " + interpretation + ".";
}

// Form submission event listener
document.getElementById("bmiForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting

    var height = parseFloat(document.getElementById("height").value);
    var weight = parseFloat(document.getElementById("weight").value);
    var gender = document.getElementById("gender").value;

    if (isNaN(height) || isNaN(weight)) {
        alert("Please enter valid numbers for height and weight.");
        return;
    }

    var bmi = calculateBMI(height, weight, gender);
    displayResult(bmi, gender);
});

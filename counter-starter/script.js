const minus = (step) => {
  // We gave the number element an id of number so we can use that to get the element
  let numberElement = document.getElementById("number");
  // We can use the innerText property to get the text inside the element
  let number = parseInt(numberElement.innerText);
  number += step;
  numberElement.innerText = number;
}; // Close the minus function here

// The reset function that sets the number back to 0
function reset() {
  // Set the text content of the number element to "0"
  document.getElementById("number").innerText = "0";
}
function customChange() {
  let numberElement = document.getElementById("number");
  let customStepElement = document.getElementById("custom-step");

  let customStep = parseInt(customStepElement.value);

  if (!isNaN(customStep)) {
    let number = parseInt(numberElement.innerText);
    number += customStep;
    numberElement.innerText = number;

    customStepElement.value = "";
  } else {
    alert("Please enter a valid number.");
  }
}

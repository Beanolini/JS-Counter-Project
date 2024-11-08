const minus = (step) => {
  // We gave the number element an id of number so we can use that to get the element
  let numberElement = document.getElementById("number");
  // We can use the innerText property to get the text inside the element
  let number = numberElement.innerText;
  number = parseInt(number) + step;
  numberElement.innerText = number;
}; // Close the minus function here

// The reset function that sets the number back to 0
function reset() {
  // Set the text content of the number element to "0"
  document.getElementById("number").innerText = "0";
}

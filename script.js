// Defines variables.
let total = 0
let capac = 0
let deli = 0

// Starts eventListener for Checkout button that triggers totalled function.
document.getElementById('click').addEventListener('click', totalled)

function totalled () {
  // Resets total value.
  total = 0

  // Gets values from select box.
  capac = document.getElementById('size').value
  deli = document.getElementById('ship').value

  // Converts values into integers.
  capac = parseFloat(capac)
  deli = parseFloat(deli)

  // Adds up total.
  total = 299 + capac + deli

  // Prints total to page.
  document.getElementById('price').innerHTML = '$' + total
}

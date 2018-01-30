// Business (or back-end) logic:
// a function to fill in a span with the value of an input
function inputReplaceText (selector, value) {
 return $(selector).text(value);
}

//Everything below this line is user interface (or front-end) logic:
// form submit event listener
$('form#survey').on('submit', function(event) {
  // prevent default form submit action
  event.preventDefault();

  // store inputs into variables
  let name = $('input#name').val();
  let beverage = $('select#beverage').val();
  let flavor = $('input:radio[name=flavor]:checked').val();
  let dob = $('input#born').val();
  let color = $('input#color').val();

  // array of inputs and span selectors
  let inputs = ['span#outputInput', 'span#outputSelect', 'span#outputRadio', 'span#outputDob', 'span#outputColor'];
  let selectors = [name, beverage, flavor, dob, color];

  // for loop to fill in empty spans with input data
  for (let i = 0; i < selectors.length; i++) {
    inputReplaceText(inputs[i], selectors[i]);
  }
  // show hidden div with input data
  $('div.info').slideDown();
});

// input, and select focus event listener
$('input, select').on('focus', function() {
  // hide div.info when an input or select is focused
  $('div.info').slideUp();
});

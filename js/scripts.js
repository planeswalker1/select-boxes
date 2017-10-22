// Business (or back-end) logic:
function inputReplaceText (selector, value) {
 return $(selector).text(value);
}

//Everything below this line is user interface (or front-end) logic:
$('form#survey').submit(function(event) {
  event.preventDefault();
  let name = $('input#name').val();
  let beverage = $('select#beverage').val();
  let flavor = $('input#flavor:checked').val();
  // let flavor = $('input:radio[name=flavor]:checked').val();
  let dob = $('input#born').val();
  let color = $('input#color').val();
  inputReplaceText('span#outputInput', name);
  inputReplaceText('span#outputSelect', beverage);
  inputReplaceText('span#outputRadio', flavor);
  inputReplaceText('span#outputDob', dob);
  inputReplaceText('span#outputColor', color);
  $('div.info').slideDown();
});

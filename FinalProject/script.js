alert("Welcome to HomeMore. Our goal is to raise awareness about Homelessness and ways you can be the change.")

// var submit = document.getElementsByClassName("form-edit-submit");
// var message = document.getElementsByClassName("message");

var submit = $(".form-edit-submit");
var message = $(".message");

submit.on("click", thankYouMessage);

function thankYouMessage (event) {
  event.preventDefault();
  var name = $("#name").val();
  console.log(name);
  message.text(`Thank you ${name} for sending us a message!`);
}

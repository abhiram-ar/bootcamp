let submit = document.getElementById("submit");
let fromName = document.getElementById("from-name");
let message = document.getElementById("message");
let replyTo = document.getElementById("reply-to");

// var templateParams = {
//   from_name,
//   message,
//   reply_to,
// };

// emailjs.send("service_9t54m3m", "YOUR_TEMPLATE_ID", templateParams).then(
//   (response) => {
//     console.log("SUCCESS!", response.status, response.text);
//   },
//   (error) => {
//     console.log("FAILED...", error);
//   }
// );

var templateParams = {
    from_name : fromName.value,
    message : message.value,
    reply_to : replyTo.value,
  };

console.log(templateParams);


submit.addEventListener("click", function (event) {

    event.preventDefault();

    var templateParams = {
        from_name : fromName.value,
        message : message.value,
        reply_to : replyTo.value,
      };
    
    console.log(templateParams);

      emailjs.send("service_9t54m3m", "template_h4l535a", templateParams).then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
});
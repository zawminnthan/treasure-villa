function sendEmail() {
    Email.send({
      Host: "smtp.gmail.com",
      Username: "sender@email_address.com",
      Password: "Enter your password",
      To: 'receiver@email_address.com',
      From: "sender@email_address.com",
      Subject: "Sending Email using javascript",
      Body: "Well that was easy!!",
    })
      .then(function (message) {
        alert("mail sent successfully")
      });
  }

function sendEmail()
{       
    var email = 'test@theearth.com';
    var subject = 'Circle Around';
    var emailBody = 'Some blah';
    window.location = 'mailto:' + email + '?subject=' + subject + '&body=' +   emailBody;
 }

document.getElementById('submit-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission behavior
 
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
 
    // Validate the input fields
    if (!firstName || !lastName || !email || !message) {
       document.getElementById('status').innerHTML = "All fields are required!";
       return;
    }
 
    // Configure the email data
    const emailData = {
       to_name: `${firstName} ${lastName}`,
       from_name: email,
       message: message,
       reply_to: email
    };
 
    // Use EmailJS to send the email
    emailjs.send('service_p8prhyr', 'service_p8prhyr', emailData)
       .then(function (response) {
          console.log('SUCCESS!', response);
          document.getElementById('status').innerHTML = "Email sent successfully!";
       }, function (error) {
          console.log('FAILED...', error);
          document.getElementById('status').innerHTML = "Failed to send email. Please try again.";
       });
 });
 
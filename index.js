$(document).ready(function () {
    $('#validateButton').click(function () {
      // Get the email input value
      const email = $('#email').val();
      const password = $('#password').val();

      // Define regex for email validation
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const passwordPattern = /^\d{8}$/;

      // Validate email
      if (emailPattern.test(email)) {
        $('#result').text('Valid email address.').css('color', 'green');
        $('#email').css("color","green")
      } else {
        $('#result').text('Invalid email address.').css('color', 'red');
        $('#email').css("color","red")
      }

      if (passwordPattern.test(password)) {
        $('#result2').text('The password is valid.').css('color', 'green');
      } else {
        $('#result2').text('Invalid password. It must be exactly 8 digits.').css('color', 'red');
      }
    });
  });
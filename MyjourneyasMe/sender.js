const fullname = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const message = document.getElementById("message");
const submit = document.getElementById("submit");

submit.addEventListener("submit", (e) => {
  e.preventDefault();
  let ebody = `
    <h3>New Contact Message</h3>
    <p><strong>Name:</strong> ${fullname.value}</p>
    <p><strong>Email:</strong> ${email.value}</p>
    <p><strong>Phone:</strong> ${phone.value}</p>
    <p><strong>subject:</strong> ${subject.value}</p>
    <p><strong>Message:</strong><br>${message.value}</p>
    `;

  Email.send({
    SecureToken: "864316d5-ba6a-46b8-b013-eb9db3d41f0f", 
    To: "reachmef0r39@gmail.com",
    From: "reachmef0r39@gmail.com",
    Subject: subject.value,
    Body: ebody,
  }).then((response) => {
    if (response === "OK") {
      alert("Successfully sent message!");
    } else {
      console.error("Error sending email:", response);
      alert("Message Sent Unsuccessful. Please try again.");
    }
  });
});

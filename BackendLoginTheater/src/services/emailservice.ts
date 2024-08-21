import nodemailer from "nodemailer";

const send_mail = async (information: any) => {
  console.log("control is here" + information.email);

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "manmeetsinghnss@gmail.com",
      pass: "jtbz vjak lfft dlyu", // Use an App Password here
    },
  });

  // Email data
  const mailOptions = {
    from: "manmeetsinghnss@gmail.com",
    to: `${information.email}`,
    subject: "Your Verification Code",
    text:
      "Welcome to film Booker app. Your verification code is " +
      information.code,
  };

  console.log("control is here 2");

  try {
    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
  } catch (error) {
    console.error("Error sending email:", error);
  }

  console.log("control ends here");
};

export default send_mail;

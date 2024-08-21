// Create a transporter using SMTP transport

import * as amqp from "amqplib/callback_api";
import { send } from "process";
import send_mail from "./emailservice";

amqp.connect("amqp://localhost", (error0, connection) => {
  if (error0) {
    throw error0;
  }
  connection.createChannel((error1, channel) => {
    if (error1) {
      throw error1;
    }

    const queue = "Email Message Queue";

    channel.assertQueue(queue, {
      durable: false,
    });

    console.log(` [*] Waiting for messages in ${queue}. To exit press CTRL+C`);

    channel.consume(
      queue,
      async (msg) => {
        if (msg !== null) {
          const data = msg.content.toString();
          const information = JSON.parse(data);
          console.log(` [x] Received ${information.email}`);
          await send_mail(information);
        }
      },
      {
        noAck: true,
      }
    );
  });
});

//export default emailService;

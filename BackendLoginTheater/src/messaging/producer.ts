import * as amqp from "amqplib/callback_api";

const producer = (data: any) => {
  amqp.connect("amqp://localhost", (error0, connection) => {
    if (error0) {
      throw error0;
    }
    connection.createChannel((error1, channel) => {
      if (error1) {
        throw error1;
      }

      const queue = "Email Message Queue";
      const msg = data;

      console.log(typeof msg);

      channel.assertQueue(queue, {
        durable: false,
      });

      channel.sendToQueue(queue, Buffer.from(`${msg}`));

      //console.log(' [x] Sent %s', `${msg} ${i}`);

      setTimeout(() => {
        connection.close();
        process.exit(0);
      }, 500);
    });
  });
};

export default producer;

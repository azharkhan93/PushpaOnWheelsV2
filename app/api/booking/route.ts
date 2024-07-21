

import { NextApiRequest, NextApiResponse } from 'next';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

const sendEmailHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { name, email, date, time, message, phoneNumber } = req.body;

    const msg = {
      to: 'owner@example.com', 
      from: 'no-reply@example.com', 
      subject: 'New Table Booking',
      text: `
        Name: ${name}
        Email: ${email}
        Phone Number: ${phoneNumber}
        Date: ${date}
        Time: ${time}
        Message: ${message}
      `,
      html: `
        <strong>Name:</strong> ${name}<br/>
        <strong>Email:</strong> ${email}<br/>
        <strong>Phone Number:</strong> ${phoneNumber}<br/>
        <strong>Date:</strong> ${date}<br/>
        <strong>Time:</strong> ${time}<br/>
        <strong>Message:</strong> ${message}
      `,
    };

    try {
      await sgMail.send(msg);
      res.status(200).json({ success: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to send email' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};

export default sendEmailHandler;


import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, date, time, message, phoneNumber } = body;

    if (!name || !email || !date || !time || !phoneNumber) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const msg = {
      to: 'azhr999990000@gmail.com', 
      from: 'azharkhan.work101@gmail.com', 
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

    await sgMail.send(msg);
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: any) {
    console.error('Error sending email:', error);
    if (error.response) {
      console.error('SendGrid error response:', error.response.body);
    }
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}





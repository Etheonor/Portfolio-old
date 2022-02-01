/* eslint-disable @typescript-eslint/no-unsafe-call */
/*
This is a simple contact form for SupaNexTail
Using Sendgrid. 
*/

import type { NextApiRequest, NextApiResponse } from 'next';

import initMiddleware from 'utils/initMiddleware';
import rateLimit from 'express-rate-limit';
import sgMail from '@sendgrid/mail';

interface Request extends NextApiRequest {
  body: {
    name: string;
    email: string;
    message: string;
  };
}

const limiter = initMiddleware(
  rateLimit({
    windowMs: 30_000, // 30sec
    max: 1, // Max 4 request per 30 sec
  })
);

const sendGrid = async (
  request: Request,
  response: NextApiResponse
): Promise<void> => {
  await limiter(request, response);
  if (request.method === 'POST') {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    console.log(request.body);

    const message = {
      to: 'mail@michaelbreyton.dev', // Change to your recipient
      from: 'michael@supanextail.dev', // Change to your verified sender
      subject: `Portfolio | New message from ${request.body.name}`,
      text: request.body.message,
      reply_to: request.body.email,
    };

    try {
      const result = await sgMail.send(message);
      console.log(result);
      if (result) {
        response.status(200).json({
          message:
            'Your message has been succesfully sent. Thank you for your feedback.',
          success: true,
        });
      }
    } catch (error: unknown) {
      if (error) {
        response.status(500).json({
          error:
            'Oups, there was a problem with your email. Are you sure you filled in all the fields?',
          success: false,
        });
      }
    }
  }
};
export default sendGrid;

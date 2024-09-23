/* eslint-disable @typescript-eslint/no-unused-vars */
import type { NextApiRequest, NextApiResponse } from 'next';

const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY || '6Lcn30wqAAAAAAlFEuLPYStReLub2zecdYRdkNCN';

export default async function verifyReCAPTCHA(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { token } = req.body;

    const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET_KEY}&response=${token}`;

    try {
      const response = await fetch(verificationUrl, {
        method: 'POST',
      });

      const data = await response.json();

      if (data.success) {
        res.status(200).json({ success: true });
      } else {
        res.status(400).json({ success: false, error: 'reCAPTCHA verification failed' });
      }
    } catch (error) {
      res.status(500).json({ success: false, error: 'Server error' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}

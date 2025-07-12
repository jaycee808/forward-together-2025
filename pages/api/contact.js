import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { name, email, message } = req.body;

    try {
        await resend.emails.send({
            from: '4WARD2GETHER - CONTACT <contact@resend.dev>',
            to: ['4ward2gether.1@gmail.com'],
            subject: `New message from ${name}`,
            reply_to: email,
            html: `
                <h2>New Contact Message</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong><br/>${message}</p>
            `,
        });

        res.status(200).json({ success: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to send email' });
    }
}
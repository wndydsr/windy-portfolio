import nodemailer from "nodemailer"

export async function POST(req) {
  const { name, email, message } = await req.json()

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    })
    return new Response(JSON.stringify({ success: true }), { status: 200 })
  } catch (err) {
    return new Response(JSON.stringify({ success: false, error: err.message }), { status: 500 })
  }
}
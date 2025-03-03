import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
// const resend = new Resend("invalid_key");

export default async function sendEmail(request, response) {
  const { name, phone, email, description } = JSON.parse(request.body);

  console.log(name, phone, email, description);

  const { data, error } = await resend.emails.send({
    from: "오로라 심리상담 연구소 <onboarding@resend.dev>",
    to: [`${process.env.EMAIL_RECEIVER}`],
    subject: "새로운 문의",
    html: `      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto;">
        <h2 style="background: #007bff; color: white; padding: 10px; text-align: center;">새로운 문의가 도착했습니다</h2>
        <p><strong>성함:</strong> ${name}</p>
        <p><strong>연락처:</strong> ${phone}</p>
        <p><strong>이메일:</strong> ${email}</p>
        <p><strong>문의내용:</strong></p>
        <p>${description}</p>
        <hr />
        <p style="text-align: center; font-size: 12px; color: #888;">오로라 심리상담 연구소 서버에서 전송되었습니다.</p>
      </div>`,
  });

  if (error) {
    response
      .status(500)
      .json({ success: false, message: "Failed to send email", error: error.message });
  }

  response.status(200).json({ success: true, message: "Email sent successfully" });
}

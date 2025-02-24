import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/VerificationEmail";
import { ApiResponse } from "@/types/ApiResponse";

export async function sendVerificationEmail(
  email: string, username: string, verifyCode: string
): Promise<ApiResponse> {
  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: email,
      subject: 'Anonymus Feedback | verification code',
      react: VerificationEmail({ username, otp: verifyCode }),
    });

    return { success: true, message: 'Verificaton email successfully' }
  } catch (error) {
    console.log("Error sending verification email", error)
    return { success: false, message: 'failed to send verificaton email' }
  }
}
"use server";

import { TFormSchema } from "@/app/contact/page";
import { z } from "zod";

export async function sendEmail(values: TFormSchema) {
  const serviceId = process.env.EMAILJS_SERVICE_ID!;
  const templateId = process.env.EMAILJS_TEMPLATE_ID!;
  const publicKey = process.env.EMAILJS_PUBLIC_KEY!;

  const payload = {
    service_id: serviceId,
    template_id: templateId,
    user_id: publicKey,
    template_params: {
      from_name: values.name,
      from_email: values.email,
      message: values.message,
    },
  };

  const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    console.error(`EmailJS failed: ${res.status} ${res.statusText}`);
    return false;
  }

  return true;
}

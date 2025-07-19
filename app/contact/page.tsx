"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { sendEmail } from "@/actions/sendEmail";
import { Header } from "@/components/header";
import { HeaderNavigation } from "@/components/headerNavigation";
import { Footer } from "@/components/contactSection/footer";
import { useState } from "react";
import { Cursor } from "@/components/cursor";

const formSchema = z.object({
  name: z.string().min(1, {
    message: "This field has to be filled.",
  }),
  email: z
    .string()
    .min(1, { message: "This field has to be filled." })
    .email("This is not a valid email."),
  message: z.string().min(1, { message: "This field has to be filled." }),
});

export type TFormSchema = z.infer<typeof formSchema>;

export default function ContactPage() {
  const [status, setStatus] = useState<
    "Initial" | "Loading" | "Success" | "Error"
  >("Initial");

  const form = useForm<TFormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onMyFormSubmit = async (data: z.infer<typeof formSchema>) => {
    setStatus("Loading");
    const isSuccess = await sendEmail(data);
    if (isSuccess) {
      form.reset();
      setStatus("Success");
    } else {
      setStatus("Error");
    }
  };

  const renderButtonText = (
    status: "Initial" | "Loading" | "Success" | "Error",
  ) => {
    switch (status) {
      case "Success":
        return "Message Sent 👍";
      case "Error":
        return "Something Went Wrong ❌";
      case "Loading":
        return "Sending Message ⌛";
      default:
        return (
          <>
            Submit
            <svg
              className="ml-[0.3em] w-[0.7em] rotate-45 transition-transform group-hover:translate-x-1 "
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.6357 15.6701L20.3521 10.5208C21.8516 6.02242 22.6013 3.77322 21.414 2.58595C20.2268 1.39869 17.9776 2.14842 13.4792 3.64788L8.32987 5.36432C4.69923 6.57453 2.88392 7.17964 2.36806 8.06698C1.87731 8.91112 1.87731 9.95369 2.36806 10.7978C2.88392 11.6852 4.69923 12.2903 8.32987 13.5005C8.91282 13.6948 9.2043 13.792 9.44793 13.9551C9.68404 14.1131 9.88687 14.316 10.0449 14.5521C10.208 14.7957 10.3052 15.0872 10.4995 15.6701C11.7097 19.3008 12.3148 21.1161 13.2022 21.6319C14.0463 22.1227 15.0889 22.1227 15.933 21.6319C16.8204 21.1161 17.4255 19.3008 18.6357 15.6701Z"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M16.2116 8.84823C16.5061 8.55696 16.5087 8.0821 16.2174 7.78758C15.9262 7.49307 15.4513 7.49044 15.1568 7.78171L16.2116 8.84823ZM10.6626 14.336L16.2116 8.84823L15.1568 7.78171L9.60787 13.2695L10.6626 14.336Z"
                fill="currentColor"
              />
            </svg>
          </>
        );
    }
  };

  return (
    <>
      <Cursor />
      <Header color="Light" />
      <HeaderNavigation />
      <main className="darkGradient relative w-full h-full px-paddingX py-paddingY text-colorLight">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2">
          {/* Left */}
          <div className="flex flex-col justify-center mb-16">
            <h1 className="text-[12vw] font-bold leading-[0.9] tracking-tight md:text-[5vw]">
              Let's start a <br /> project together
            </h1>
          </div>

          {/* Right */}
          <div className="mt-10">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onMyFormSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>What's your name?</FormLabel>
                      <FormControl>
                        <Input type="text" placeholder="Your Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>What's your email?</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="yourname123@email.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your message</FormLabel>
                      <FormControl>
                        <Textarea
                          className="h-[6em]"
                          placeholder="Type your message here"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="group h-auto w-auto rounded-full bg-colorLight px-6 py-3 text-colorDark"
                  disabled={status === "Loading"}
                >
                  {renderButtonText(status)}
                </Button>
              </form>
            </Form>
          </div>
        </div>
        <Footer className="left-0 bottom-3" />
      </main>
    </>
  );
}

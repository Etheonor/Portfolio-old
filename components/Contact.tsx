/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @next/next/no-img-element */

import 'react-toastify/dist/ReactToastify.css';
import { Send } from 'lucide-react';

import axios, { AxiosError } from 'axios';

import { toast } from 'react-toastify';

const sendEmail = async (): Promise<void> => {
  const subject = (document.querySelector('#subject') as HTMLInputElement)
    .value;
  const email = (document.querySelector('#email') as HTMLInputElement).value;
  const message = (document.querySelector('#message') as HTMLInputElement)
    .value;

  interface EmailData {
    success: boolean;
    message: string;
  }

  interface ErrorAxios {
    data: {
      error: string;
      success: boolean;
    };
  }

  if (subject && email && message) {
    try {
      const mail = await axios.post<EmailData>('/api/sendgrid', {
        email,
        subject,
        message,
      });
      if (mail.data.success === true) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        toast.success(mail.data.message);
        (document.querySelector('#subject') as HTMLInputElement).value = '';
        (document.querySelector('#email') as HTMLInputElement).value = '';
        (document.querySelector('#message') as HTMLInputElement).value = '';
      }
    } catch (error: unknown) {
      const errorChecked = error as AxiosError;
      const errorMessage = errorChecked.response as ErrorAxios;
      toast.error(errorMessage.data.error);
    }
  } else {
    toast.info('Please fill all the fields ', {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
};
const Contact = (): JSX.Element => {
  return (
    <>
      <section
        className="bg-emerald-200 lg:h-screen text-emerald-800"
        id="contact">
        <div className="py-8 lg:py-16 px-4 m-auto max-w-screen-md flex flex-col">
          <h2 className="drop-shadow-title mb-4 text-7xl tracking-tight font-extrabold text-center">
            Contact Us
          </h2>
          <p className="mb-8 mt-5 lg:mb-16 text-center sm:text-xl ">
            Want to create a website with me? Interested by my work? Don't
            hesitate to send me a message, I look forward to working with you!
          </p>
          <form
            onSubmit={(e): void => {
              e.preventDefault();
              void sendEmail();
            }}
            action="/api/contact"
            method="post"
            className="space-y-8">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium">
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="text-emerald-800 text-sm rounded-md focus:border-emerald-800 focus:ring-emerald-800 block w-full p-2.5 bg-emerald-100 drop-shadow-md"
                placeholder="name@gmail.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="text-emerald-800 text-sm rounded-md focus:border-emerald-800 focus:ring-emerald-800 block w-full p-2.5 bg-emerald-100 drop-shadow-md"
                placeholder="Let me know how I can help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium">
                Your message
              </label>
              <textarea
                id="message"
                rows={6}
                className="text-emerald-800 text-sm rounded-md focus:border-emerald-800 focus:ring-emerald-800 block w-full p-2.5 bg-emerald-100 drop-shadow-md"
                placeholder="Leave a comment..."></textarea>
            </div>
            <button
              type="submit"
              className="bg-emerald-800 p-3 text-emerald-200 hover:text-emerald-50 hover:bg-emerald-700 transition-all ease-in-out rounded-md">
              <span className="flex ">
                <Send />
                <span className="ml-2">Send message</span>
              </span>
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;

/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @next/next/no-img-element */

import 'react-toastify/dist/ReactToastify.css';

import axios, { AxiosError } from 'axios';

import { toast } from 'react-toastify';

const sendEmail = async (): Promise<void> => {
  const name = (document.querySelector('#name') as HTMLInputElement).value;
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

  if (name && email && message) {
    try {
      const mail = await axios.post<EmailData>('/api/sendgrid', {
        email,
        name,
        message,
      });
      if (mail.data.success === true) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        toast.success(mail.data.message);
        (document.querySelector('#name') as HTMLInputElement).value = '';
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
    <section id="contact" className={`h-screen flex flex-col p-5`}>
      <h2 className="text-5xl xl:text-7xl font-title text-center pt-16">
        Contact Me
      </h2>
      <p className="mt-5 mx-auto text-lg max-w-md text-center">
        Want to create a website with me? Don't hesitate to send me a message, I
        look forward to working with you!
      </p>
      <form
        onSubmit={(e): void => {
          e.preventDefault();
          void sendEmail();
        }}
        action="/api/contact"
        method="post"
        className="flex my-auto flex-row flex-wrap justify-evenly text-xl font-body">
        <div className="w-96 flex flex-col justify-start">
          <div className="mb-10 flex flex-col">
            <label htmlFor="name" className="mb-3">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="shadow-lg h-12 px-2"
            />
          </div>
          <div className="mb-10 flex flex-col">
            <label htmlFor="mail" className="mb-3">
              Mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="shadow-lg h-12 px-2"
            />
          </div>
        </div>
        <div className="my-auto w-96">
          <div className="mb-10 flex flex-col">
            <label htmlFor="msg" className="mb-3">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              cols={35}
              className="shadow-lg p-2"
            />
          </div>
          <div className="button w-full">
            <button
              type="submit"
              className="m-auto mr-0 flex bg-stone-700 text-slate-100 px-4 py-2 text-base rounded-md hover:bg-stone-900 hover:text-slate-50 transition-all">
              ✉ SEND
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Contact;

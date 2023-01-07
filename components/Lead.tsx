/* eslint-disable @next/next/no-img-element */
import { Mail, Twitter, Linkedin } from 'lucide-react';

const Lead = (): JSX.Element => (
  <section className="flex h-screen flex-row text-lg sm:text-2xl lg:text-3xl xl:text-4xl">
    <div className="flex w-full flex-col bg-emerald-800 text-emerald-200">
      <div className="m-auto grid h-screen w-full grid-flow-col auto-rows-max grid-rows-3">
        <div className="m-auto font-body">
          <img
            src="/images/avatar.svg"
            alt="an arrow"
            className="m-auto mt-14 mb-5 w-28 md:w-32 xl:w-44 lg:mt-16 xl:mt-20 drop-shadow-title  hover:rotate-[-12deg] transition-all ease-in-out"
          />
          <p className="max-w-xl px-5 md:leading-normal xl:max-w-3xl lg:mt-10">
            I’m{' '}
            <span className="text-amber-500 font-bold drop-shadow-md">
              Michael
            </span>
            , a web developer with a passion for crafting beautiful and
            functional websites.
          </p>
        </div>
        <p className="drop-shadow-title m-auto font-title text-9xl md:text-big font-black mr-5 text-emerald-200">
          H
        </p>
        <div className="m-auto" />
      </div>
    </div>
    <div className="grid w-full grid-flow-col auto-rows-max grid-rows-3 bg-emerald-200 text-emerald-800">
      <div className="m-auto mr-10 mt-10 flex space-x-4 ">
        <a href="#contact">
          <Mail
            className="transition duration-200 ease-in-out
          hover:text-amber-500"
          />
        </a>
        <a
          href="https://www.twitter.com/michael_webdev"
          target="_blank"
          rel="noreferrer">
          <Twitter
            className="transition duration-200 ease-in-out
          hover:text-amber-500"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/micha%C3%ABl-breyton-a88aa146/"
          target="_blank"
          className=""
          rel="noreferrer">
          <Linkedin
            className="transition duration-200 ease-in-out
          hover:text-amber-500"
          />
        </a>
      </div>
      <p className="drop-shadow-title m-auto font-title text-9xl md:text-big font-black ml-5">
        I
      </p>
      <div className="m-auto flex flex-col px-5 text-center">
        <div className="m-auto mb-12 max-w-xl px-5 text-center font-body lg:px-0 xl:max-w-3xl lg:leading-normal">
          <p>Want to see some of my projects?</p>
          <p>Scroll down!</p>
        </div>
        <img
          src="/images/arrow-down.svg"
          alt="an arrow"
          className="m-auto mt-0 w-10 md:w-12 lg:w-14 xl:w-16 animate-bounce fill-emerald-800"
        />
      </div>
    </div>
  </section>
);
export default Lead;

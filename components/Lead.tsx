/* eslint-disable @next/next/no-img-element */

import Linkedin from 'components/UI/Linkedin';
import Mail from 'components/UI/Mail';
import Twitter from 'components/UI/Twitter';

const Lead = (): JSX.Element => (
  <section className="flex h-screen flex-row">
    <div className="flex w-full flex-col bg-stone-800 text-slate-100">
      <div className="m-auto grid h-screen w-full grid-flow-col auto-rows-max grid-rows-3">
        <div className="m-auto font-body text-base md:text-xl xl:text-2xl">
          <img
            src="/images/avatar.svg"
            alt="an arrow"
            className="m-auto mt-14 mb-5 w-28 md:w-32 lg:mt-16 xl:mt-20"
          />
          <p className="max-w-xl px-5 text-center md:leading-relaxed lg:px-0">
            I’m <span className="text-amber-500">Michael</span>, a web developer
            available to work with you on your next awesome website.
          </p>
        </div>
        <p className="m-auto font-title text-big font-bold  sm:mr-5">H</p>
        <div className="m-auto" />
      </div>
    </div>
    <div className="grid w-full grid-flow-col auto-rows-max grid-rows-3 bg-slate-100 text-stone-800">
      <div className="m-auto mr-10 mt-10 flex space-x-4 ">
        <a href="/contact">
          <Mail />
        </a>
        <a
          href="https://www.twitter.com/michael_webdev"
          target="_blank"
          rel="noreferrer">
          <Twitter />
        </a>
        <a
          href="https://www.linkedin.com/in/micha%C3%ABl-breyton-a88aa146/"
          target="_blank"
          className="fill-stone-800 transition duration-200 ease-in-out
          hover:fill-amber-500"
          rel="noreferrer">
          <Linkedin />
        </a>
      </div>
      <p className="m-auto font-title text-big font-bold sm:ml-5">I</p>
      <div className="m-auto flex flex-col px-5 text-center">
        <div className="m-auto mb-5 max-w-xl px-5 text-center font-body text-base md:text-xl lg:px-0 xl:text-2xl">
          <p>Want to see some of my projects?</p>
          <p>Scroll down!</p>
        </div>
        <img
          src="/images/arrow-down.svg"
          alt="an arrow"
          className="m-auto mt-0 w-10"
        />
      </div>
    </div>
  </section>
);
export default Lead;

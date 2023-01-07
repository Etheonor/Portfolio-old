/* eslint-disable @next/next/no-img-element */

import { Link } from 'lucide-react';
import { Fade, Zoom } from 'react-awesome-reveal';

interface ProjectProps {
  bg: string;
  project: string;
  image: string;
  link: string;
  description: string;
}

const Project = (props: ProjectProps): JSX.Element => {
  return (
    <section
      className={`flex lg:h-screen flex-row flex-wrap ${
        props.bg === 'dark'
          ? 'bg-emerald-800 text-emerald-200'
          : 'bg-emerald-200 text-emerald-800'
      }`}>
      <div className="flex flex-col m-auto">
        <div className="m-auto p-8">
          <div className="m-auto font-body text-base md:text-xl xl:text-2xl">
            <div className="flex flex-col flex-grow: 1">
              <Zoom
                fraction={0.8}
                triggerOnce={true}
                className="drop-shadow-title text-5xl xl:text-7xl 2xl:text-9xl m-auto font-title font-extrabold">
                <h2>{props.project}</h2>
              </Zoom>
              <Fade
                fraction={0.8}
                triggerOnce={true}
                className={`h-24 border-l m-auto left-1/2 my-5 ${
                  props.bg === 'dark'
                    ? 'border-emerald-200'
                    : 'border-emerald-800'
                }`}>
                <div />
              </Fade>

              <Zoom fraction={0.8} triggerOnce={true}>
                <p className="max-w-2xl lg:px-0 px-5 m-auto font-light tracking-wide leading-relaxed">
                  {props.description}
                </p>
              </Zoom>
            </div>
          </div>
        </div>
      </div>

      <Fade fraction={0.8} triggerOnce={true} className="m-auto">
        <div className="m-auto 2xl:max-w-4xl xl:max-w-2xl max-w-xl p-5">
          <img
            src={props.image}
            alt="Website presentation"
            className="shadow-md rounded-md"
          />
          <div className="flex mt-7 mb-5">
            <Link className="mr-2" />
            <a
              href={props.link}
              target="_blank"
              className={`tracking-widest transition duration-200 ease-in-out
          hover:text-amber-500 lg:text-2xl font-body`}
              rel="noreferrer">
              {props.link}
            </a>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default Project;

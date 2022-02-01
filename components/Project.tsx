/* eslint-disable @next/next/no-img-element */

import Link from 'components/UI/Link';

interface ProjectProps {
  bg: string;
  project: string;
  image: string;
  link: string;
  description: string;
}

const Project = (props: ProjectProps): JSX.Element => (
  <section
    className={`flex h-screen flex-row flex-wrap ${
      props.bg === 'dark'
        ? 'bg-stone-800 text-slate-100'
        : 'bg-slate-100 text-stone-800'
    }`}>
    <div className="flex flex-col m-auto">
      <div className="m-auto">
        <div className="m-auto font-body text-base md:text-xl xl:text-2xl">
          <div className="flex flex-col max-w-md">
            <h2 className="m-auto text-7xl font-title">{props.project}</h2>
            <div
              className={`h-24 border-l relative left-1/2 my-5 ${
                props.bg === 'dark' ? 'border-slate-100' : 'border-stone-900'
              }`}
            />
            <p className="max-w-xl px-5 text-center md:leading-relaxed lg:px-0 text-xs">
              {props.description}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="m-auto">
      <div className="m-auto max-w-lg p-5">
        <img
          src={props.image}
          alt="Multy website presentation"
          className="shadow-md rounded-md"
        />
        <div className="flex mt-5">
          <Link bg={props.bg} />
          <a
            href={props.link}
            target="_blank"
            className={`text-lg tracking-widest transition duration-200 ease-in-out
          hover:text-amber-500`}
            rel="noreferrer">
            {props.link}
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Project;

/*
Don't forget to modify the Head component with your website informations
You can also update the content on the Landing.js component
*/

import Contact from 'components/Contact';
import Head from 'next/head';
import Lead from 'components/Lead';
import Project from 'components/Project';
import { ToastContainer } from 'react-toastify';
import projects from '../public/projects.json';

type projects = {
  name: string;
  description: string;
  image: string;
  link: string;
  bg: string;
}[];

const myProjects = projects as projects;

const Home = (): JSX.Element => (
  <>
    <Head>
      <title>Michael Breyton | Portfolio</title>
      <meta
        name="description"
        content="This is my portfolio, 
        I worked in the video game industry for 10 years, and now the joys of web development are mine!"
      />

      <meta property="og:url" content="https://michaelbreyton.dev/" />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="This is my portfolio, 
        I worked in the video game industry for 10 years, and now the joys of web development are mine!"
      />
      <meta
        property="og:description"
        content="This is my portfolio, 
        I worked in the video game industry for 10 years, and now the joys of web development are mine!"
      />
      <meta
        property="og:image"
        content="https://michaelbreyton.dev/ogimage.png"
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="michaelbreyton.dev" />
      <meta
        property="twitter:url"
        content="https://michaelbreyton.dev/ogimage.png"
      />
      <meta name="twitter:title" content="Michael Breyton | Portfolio" />
      <meta
        name="twitter:description"
        content="This is my portfolio, 
        I worked in the video game industry for 10 years, and now the joys of web development are mine!"
      />
      <meta
        name="twitter:image"
        content="https://michaelbreyton.dev/ogimage.png"
      />
      <meta charSet="UTF-8" />
    </Head>

    <>
      <Lead />
      {myProjects.map((el, index) => {
        return (
          <Project
            key={index}
            project={el.name}
            description={el.description}
            image={el.image}
            link={el.link}
            bg={el.bg}
          />
        );
      })}

      <Contact />
      <ToastContainer position="bottom-center" />
    </>
  </>
);
export default Home;

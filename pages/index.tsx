/*
Don't forget to modify the Head component with your website informations
You can also update the content on the Landing.js component
*/

import Head from 'next/head';
import Lead from 'components/Lead';
import Project from 'components/Project';

const Home = (): JSX.Element => (
  <>
    <Head>
      <title>My Portfolio</title>
      <meta
        name="description"
        content="SupaNexTail is a boilerplate for your SaaS, based on Next.js, Supabase, and TailwindCSS"
      />

      <meta property="og:url" content="https://supanextail.dev/" />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="SupaNexTail is a boilerplate for your SaaS, based on Next.js, Supabase, and TailwindCSS"
      />
      <meta
        property="og:description"
        content="SupaNexTail is a boilerplate for your SaaS, based on Next.js, Supabase, and TailwindCSS"
      />
      <meta property="og:image" content="https://supanextail.dev/ogimage.png" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="supanextail.dev" />
      <meta
        property="twitter:url"
        content="https://supanextail.dev/ogimage.png"
      />
      <meta name="twitter:title" content="Welcome to SupaNexTail" />
      <meta
        name="twitter:description"
        content="SupaNexTail is a boilerplate for your SaaS, based on Next.js, Supabase, and TailwindCSS"
      />
      <meta
        name="twitter:image"
        content="https://supanextail.dev/ogimage.png"
      />
      <meta charSet="UTF-8" />
    </Head>

    <>
      <Lead />
      <Project
        project="Multy"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Duis a sagittis lorem, ut porta libero. Etiam congue cursus ornare. 
  Ut enim felis, venenatis ac porta pellentesque, finibus pellentesque ante. 
  Donec euismod malesuada tortor, at efficitur dolor. Interdum et malesuada 
  fames ac ante ipsum primis in faucibus. Sed erat nisl, egestas vitae tortor elementum, 
  dignissim vestibulum metus. Proin sodales blandit eleifend. Nunc posuere dui ut suscipit interdum."
        image="/images/multy.png"
        link="https://www.multy.me"
        bg="dark"
      />
      <Project
        project="SupaNexTail"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Duis a sagittis lorem, ut porta libero. Etiam congue cursus ornare. 
      Ut enim felis, venenatis ac porta pellentesque, finibus pellentesque ante. 
      Donec euismod malesuada tortor, at efficitur dolor. Interdum et malesuada 
      fames ac ante ipsum primis in faucibus. Sed erat nisl, egestas vitae tortor elementum, 
      dignissim vestibulum metus. Proin sodales blandit eleifend. Nunc posuere dui ut suscipit interdum."
        image="/images/supanextail.png"
        link="https://www.supanextail.dev"
        bg="light"
      />
      <Project
        project="Travelogue"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Duis a sagittis lorem, ut porta libero. Etiam congue cursus ornare. 
      Ut enim felis, venenatis ac porta pellentesque, finibus pellentesque ante. 
      Donec euismod malesuada tortor, at efficitur dolor. Interdum et malesuada 
      fames ac ante ipsum primis in faucibus. Sed erat nisl, egestas vitae tortor elementum, 
      dignissim vestibulum metus. Proin sodales blandit eleifend. Nunc posuere dui ut suscipit interdum."
        image="/images/travelogue.png"
        link="https://www.travelogue.earth"
        bg="dark"
      />
    </>
  </>
);
export default Home;

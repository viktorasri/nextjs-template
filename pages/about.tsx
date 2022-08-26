import { ReactElement } from 'react';
import PrimaryLayout from '../components/layout/primary/PrimaryLayout';

import styles from '../styles/Home.module.css';
import { NextPageWithLayout } from './_app';

const About: NextPageWithLayout = () => {
  return (
    <section className={styles.name}>
      <div>
        <h1>
          I'm going to become <span>a code snippet</span>
        </h1>
      </div>

      <ol>
        <li>Copy the .js from this pen and add it to your project.</li>
        <li>
          Add prism.js to your project (both .js and .css). I've added the cdn
          hosted versions to this pen. You can see the urls in this pen's
          settings.
        </li>
        <li>
          Whatever you put inside a <code>.make-snippet</code> element will get
          converted to a snippet and appened to the dom
        </li>
      </ol>
    </section>
  );
};

export default About;

About.getLayout = (page: ReactElement) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};

import Head from "next/head";
import Layout from "../components/layout";
import styles from "../styles/page.module.css";
import aboutStyles from "../styles/about.module.css";

function About() {
  return (
    <Layout>
      <Head>
        <title>Form+Structure - About Kyle Stewart</title>
      </Head>
      <article className={styles.article}>
        <div className={styles.intro}>
          <h1>Kyle Stewart</h1>
          <h2>Creative Software Engineer</h2>
        </div>

        <div className={aboutStyles.two_column}>
          <img src="/images/profile.jpg" alt="" />

          <div className={aboutStyles.description}>
            <p>
              I’m a software engineer who loves to use technology for creative
              expression. As a mobile developer, I have experience delivering
              award-winning, graphics-intensive apps to millions of people—but
              my interests range far beyond mobile apps. I enjoy exploring
              creative uses for technology such as art, music, and physical
              computing.
            </p>

            <ul>
              <li>Languages: Javascript, Python, Swift, C/C++</li>
              <li>
                3D Graphics: GLSL, OpenGL, WebGL, GPU pipeline, linear algebra
              </li>
              <li>
                Creative Coding: Houdini, Numpy, JS Canvas, WebGL, Processing,
                Open Frameworks, audio synthesis
              </li>
              <li>
                Electronics: Arduino, Raspberry PI, ARM Cortex-M, Embedded C,
                KiCad
              </li>
            </ul>
          </div>
        </div>
      </article>
    </Layout>
  );
}

export default About;

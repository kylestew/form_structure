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
              I am focused on the intersection of art and tech. I work with
              real-time 3D graphics on mobile and web. I keep busy with side
              projects like 3D printing and electronics when I'm not
              programming. My work and hobbies share a common theme, finding
              creative uses for technology.
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

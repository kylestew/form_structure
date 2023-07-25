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
          <h2>Creative Coder</h2>
        </div>

        <div className={aboutStyles.two_column}>
          <img src="/images/profile.jpg" alt="" />

          <div className={aboutStyles.description}>
            <p>

            I'm a versatile software engineer with a profound passion for utilizing technology as a powerful tool for creative expression. While my expertise lies in mobile development, where I have successfully delivered graphics-intensive and award-winning apps to millions of users, my interests and abilities extend far beyond the realm of mobile apps. I explore the intersection of technology and artistic endeavors, venturing into diverse domains such as digital art, music, and physical computing. My creative practice fuels my drive to push the boundaries of what's possible, bringing innovative and imaginative ideas to life through cutting-edge technological solutions. By bridging the gap between art and technology, I consistently seek to create unique and captivating experiences that resonate with audiences on a profound level.

            </p>

            <ul>
              <li>Languages: Python, Swift, Javascript, C/C++</li>
              <li>
                3D Graphics: GLSL, OpenGL, Metal, WebGL, GPU pipeline, linear algebra
              </li>
              <li>
                Creative Coding: Processing/P5.js, TouchDesigner, WebGL, Open Frameworks, Custom Python, Audio DSP
              </li>
              <li>
                Motion Graphics: Blender, Houdini, After Effects
              </li>
              <li>
                Electronics: Arduino, Raspberry PI/Pico, ARM Cortex-M, Bare Metal, KiCad
              </li>
            </ul>

            <p>
              <a href="https://docs.google.com/document/d/1qD4cl4_EE31cBkt3aeY8VDAvfEAGIPoZfsIY5pTQs94/edit?usp=sharing">View Resume</a>
            </p>
          </div>
        </div>
      </article>
    </Layout>
  );
}

export default About;

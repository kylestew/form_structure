import Head from "next/head";
import Layout from "../../components/layout";
import styles from "../../styles/page.module.css";

function About() {
  return (
    <Layout>
      <Head>
        <title>Form+Structure - 3D Renders</title>
      </Head>
      <article className={styles.article}>
        <div className={styles.intro}>
          <h1>3D Renders</h1>
          <h2>Exploring Houdini</h2>
        </div>

        <iframe
          src="https://player.vimeo.com/video/302944359?h=4ccac8a0be"
          width="640"
          height="360"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>

        <p>
          I&apos;ve been fascinated by computer graphics ever since seeing
          Pixar&apos;s Toy Story. Since high school I&apos;ve been working with
          various 3D technologies such as DirectX and OpenGL. The rise of the
          programmable GPU pipeline and shader programming has been a boon to
          the graphics based apps I work on. In 2017 I decided to continue my
          graphics study by learning a professional VFX package.{" "}
          <a href="">Houdini</a> is an amazingly versatile piece of software and
          was surprisingly easy coming from a coding background. The level of
          control and programability rivals any other professional package such
          as Maya and Cinema 4D. Houdini is an amazing addition to my creative
          toolset.
        </p>

        <ul className={styles.imagegrid}>
          <li>
            <img src="/images/non-realtime/poly_dent.jpeg" />
          </li>
          <li>
            <img src="/images/non-realtime/2017-11-14+17.58.00.jpg" />
          </li>
          <li>
            <img src="/images/non-realtime/2017-07-08+14.01.07.jpg" />
          </li>
          <li>
            <img src="/images/non-realtime/beethoven.png" />
          </li>
          <li>
            <img src="/images/non-realtime/2017-07-06+10.43.54.jpg" />
          </li>
          <li>
            <img src="/images/non-realtime/2017-10-07+11.15.18.jpg" />
          </li>
        </ul>
      </article>
    </Layout>
  );
}

export default About;

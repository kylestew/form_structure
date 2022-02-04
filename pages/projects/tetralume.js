import Head from "next/head";
import Layout from "../../components/layout";
import styles from "../../styles/page.module.css";
import InstagramEmbed from "react-instagram-embed";

function About() {
  return (
    <Layout>
      <Head>
        <title>Form+Structure - Tetralume</title>
      </Head>
      <article className={styles.article}>
        <div className={styles.intro}>
          <h1>Tetralume</h1>
          <h2>Sound and motion experience</h2>
        </div>
        <iframe
          src="https://player.vimeo.com/video/273113997?h=a8d107e79f"
          width="640"
          height="360"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>

        <p>
          Tetralume is a twelve minute light and sound performance that occurs
          on an eleven foot tetrahedron structure mapped with LED lighting
          choreographed to an original score that takes you on a journey through
          an eclectic electronic musical soundscape.
        </p>

        <h3>Technical Details</h3>

        <p>
          The biggest challenge we encountered while developing Tetralume was
          animating onto 3D structure. Traditional animation systems are
          targeted towards a flat screen. We iterated my ideas on how to map an
          animation created on a 2D screen to a 3D object. Touch Designer was a
          very helpful tool for creating animations and visualizing them in 3D.
          It also allowed us to pull in our custom audio track and sync the
          animations tightly to the music.
        </p>

        <p>
          This many LEDs are also very power hungry. I had to stretch because
          I&apos;m used to lower power systems. Each LED takes approximately 35
          mAh which seems tiny until you multiply it by 1200 LEDs. We budgeted
          for a peak power of 90 watts.
        </p>

        <p>
          Getting a good refresh rate on the pixels was also challenging.
          WS2812s are tricky with control and need precise timing.
        </p>

        <ul>
          <li>1200 RGB LEDs</li>
          <li>Redundant PSUs</li>
          <li>PixelPusher networked LED controller</li>
          <li>Touch Designer custom LED mapping and animations</li>
        </ul>

        <p>
          <em>
            <a href="https://www.instagram.com/luminul_creative">
              Luminul Creative
            </a>{" "}
            is a collaboration between{" "}
            <a href="https://www.instagram.com/benguerrette">Ben Guerrette</a>{" "}
            and myself.
          </em>
        </p>
      </article>
    </Layout>
  );
}

export default About;

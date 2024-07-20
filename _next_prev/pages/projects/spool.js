import Head from "next/head";
import Layout from "../../components/layout";
import styles from "../../styles/page.module.css";

function About() {
  return (
    <Layout>
      <Head>
        <title>Form+Structure - Spool</title>
      </Head>
      <article className={styles.article}>
        <div className={styles.intro}>
          <h1>Spool</h1>
          <h2>Create visuals for your music</h2>
        </div>

<video controls=""><source src="https://storage.googleapis.com/pixite-production/2022/05/eab9d8ee-spoolapppreview1_landscape_30.mp4"></video>

        <p>
          Tetralume is a twelve minute light and sound performance that occurs
          on an eleven foot tetrahedron structure mapped with LED lighting
          choreographed to an original score that takes you on a journey through
          an eclectic electronic musical soundscape.
        </p>

        <h3>Technical Details</h3>

        <p>
          The biggest challenge we encountered while developing Tetralume was
          animating onto a 3D structure. Traditional animation systems are
          targeted towards a flat-screen. We iterated my ideas on mapping an
          animation created on a 2D screen to a 3D object. Touch Designer was a
          beneficial tool for creating animations and visualizing them in 3D. It
          also allowed us to pull in our custom audio track and sync the
          animations tightly to the music.
        </p>

        <p>
          This was also quite a bit more LEDs than I&apos;d ever worked with
          before. Powering 1200 LEDs allowed me to learn about more power
          supplies and proper wiring. Each LED takes approximately 35 mAh, which
          seems tiny until you multiply it by 1200 LEDs. We budgeted for a peak
          power of 90 watts and distributed the load between two Meanwell PSUs.
        </p>

        <p>
          Other challenges included getting a high refresh rate out of the
          finicky WS2812 LEDs and providing good signal quality over long
          distances. People were impressed by the performance, but the
          experience and learning I took from it are what I appreciate most.
        </p>

        <h3>Hardware</h3>

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

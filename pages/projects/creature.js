import Head from "next/head";
import Layout from "../../components/layout";
import styles from "../../styles/page.module.css";

export default function Project() {
  return (
    <Layout>
      <Head>
        <title>Form+Structure - Creature</title>
      </Head>
      <article className={styles.article}>
        <div className={styles.intro}>
          <h1>Creature</h1>
          <h2>Moody little orb</h2>
        </div>

        <iframe
          src="https://player.vimeo.com/video/316944742?h=093f0053fc"
          width="640"
          height="360"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>

        <p>
          Creature brings technology to life by emulating basic moods. Using
          audio and animated visuals, we represented moods like curious,
          excited, or bored. The sculpture comes to life through interaction by
          the user.
        </p>

        <p>
          This video shows user reaction from the projects premiere november 17,
          2018 at the code kitchen art show in San Diego.
        </p>

        <p>
          An inductive sensing microcontroller was used to read multiple touch
          areas on the outside of the orb. LEDs were installed inside the
          creature and mapped to animations using Touch Designer. The funnest
          part of this project was creating a state machine that would emulate
          moods based on the different combinations of touches.
        </p>

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

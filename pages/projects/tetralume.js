import Head from "next/head";
import Layout from "../../components/layout";
import styles from "../../styles/page.module.css";

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

        {/* Add Standalones

          Explain Tetralume challenges
          https://www.instagram.com/p/BgfTrjPjlYF/
          https://www.instagram.com/p/BfoSw_GBWw1/
          https://www.instagram.com/p/BeUgwTQBVXS/
          https://www.instagram.com/p/BhxQXx8gETK/

          Add Creature 
          
          
          */}

        <p>
          Tetralume is a twelve minute light and sound performance that occurs
          on an eleven foot tetrahedron structure mapped with LED lighting
          choreographed to an original score that takes you on a journey through
          an eclectic electronic musical soundscape.
        </p>

        <h3>Technical Details</h3>

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

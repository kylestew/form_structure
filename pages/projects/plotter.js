import Head from "next/head";
import Layout from "../../components/layout";
import styles from "../../styles/page.module.css";

function About() {
  return (
    <Layout>
      <Head>
        <title>Form+Structure - Penmanship</title>
      </Head>
      <article className={styles.article}>
        <div className={styles.intro}>
          <h1>Penmanship</h1>
          <h2>Mechanically Plotted Artwork</h2>
        </div>

        <img src="/images/plotter/2017-11-30+10.04.31.jpg" />

        <p>
          After seeing a few amazing examples of art done with pen plotting
          devices, I purchased the{" "}
          <a href="https://www.axidraw.com/">AxiDraw</a> in late 2017.
          Mechanical plotting, which existed before laser printers came onto the
          scene, really fascinated me with its mix of precision and limitations.
          The AxiDraw specifically is incredibly precise, which usually meant my
          plots looked like prints. I still haven&apos;t wrapped my head around
          making the plots look more hand drawn. Instead I abused the hell out
          of the precision to see where it would take me.
        </p>

        <iframe
          src="https://player.vimeo.com/video/259516473?h=c903def6af"
          width="640"
          height="640"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>

        <p>
          Processing, Python, and Houdini were used to create plots.
          Surprisingly I ended up using Houdini for most of the plots, and loved
          the process. Houdini is an amazing generalist tool that allows for
          quick iteration and complete control over geometry. I haven&apos;t
          even scratched the surface of its capabilities.
        </p>

        <img src="/images/plotter/2017-11-08+08.56.19.jpg" />
        <img src="/images/plotter/23164676_1526444150780694_5470752277323055104_n.jpeg" />

        <img src="/images/plotter/2017-12-06+11.17.15.jpg" />
        <img src="/images/plotter/2017-12-20+13.01.46.jpg" />
        <img src="/images/plotter/2017-12-31+17.31.26.jpg" />
        <img src="/images/plotter/2017-10-23+08.13.18.jpg" />
        <img src="/images/plotter/2017-11-01+10.39.48.jpg" />
      </article>
    </Layout>
  );
}

export default About;

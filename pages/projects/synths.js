import Head from "next/head";
import Layout from "../../components/layout";
import styles from "../../styles/page.module.css";

export default function Project() {
  return (
    <Layout>
      <Head>
        <title>Form+Structure - Synth Exploration</title>
      </Head>
      <article className={styles.article}>
        <div className={styles.intro}>
          <h1>Synth Exploration</h1>
          <h2>30 days - 30 instruments</h2>
        </div>

        <iframe
          title="vimeo-player"
          src="https://player.vimeo.com/video/223058973?h=af1670b4f6"
          width="640"
          height="360"
          frameBorder="0"
          allowFullScreen
        ></iframe>

        <p>
          In April of 2017 I challenged myself to create 30 instruments in 30
          days. At the time I was interested in the world of analog synthesis
          and wanted to do a deep dive into how they work. All instruments were
          digital synthesized versions of analog instruments. Yes, I know
          that&apos;s weird and confusing. It gave me the chance to express the
          same idea on multiple platforms including MaxMSP, Pure Data, Arduino,
          and Raspberry Pi.
        </p>

        <p>
          <em>
            You can read more on{" "}
            <a href="https://www.instagram.com/luminul_creative">Medium</a>
          </em>
        </p>

        <img src="/images/synths/instrument30-proto-fix.jpeg" alt="" />

        <iframe
          title="vimeo-player"
          src="https://player.vimeo.com/video/221942638?h=7211150025"
          width="640"
          height="360"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </article>
    </Layout>
  );
}

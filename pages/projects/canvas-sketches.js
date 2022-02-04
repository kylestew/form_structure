import Head from "next/head";
import Layout from "../../components/layout";
import styles from "../../styles/page.module.css";
import Script from "next/script";
import dynamic from "next/dynamic";

export default function Project() {
  const DynamicComponent = dynamic(() => import("../../components/canvas"), {
    ssr: false,
  });

  return (
    <Layout>
      <Head>
        <title>Form+Structure - Canvas Sketches</title>
      </Head>
      <article className={styles.article}>
        <div className={styles.intro}>
          <h1>Canvas Sketches</h1>
          <h2>Look what the browser can do!</h2>
        </div>

        <DynamicComponent />
        {/* <canvas id="canvas" />

        <Script src="/scripts/canvas-3d/main.js" type="module" /> */}

        <p>
          I would usually use WebGL to make something like this. The Canvas API
          with its 2D drawing functions was used instead to rasterize a
          generative 3D object. This exercise was a chance to better understand
          cameras, depth, and transforms. See if you can spot the rendering
          issue.
        </p>
      </article>
    </Layout>
  );
}

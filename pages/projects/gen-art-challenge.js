import Head from "next/head";
import Layout from "../../components/layout";
import styles from "../../styles/page.module.css";

function Project() {
  return (
    <Layout>
      <Head>
        <title>Form+Structure - 100 Days of Generative Art</title>
      </Head>
      <article className={styles.article}>
        <div className={styles.intro}>
          <h1>100 Days of Generative Art</h1>
          <h2>My coding addiction</h2>
        </div>

        <ul className={styles.imagegrid}>
          <li>
            <img src="/images/gen-art-challenge/tumblr_o56i1mkf1i1rpxw1qo1_r1_400.gif" />
          </li>
          <li>
            <img src="/images/gen-art-challenge/tumblr_o3lmzrDG421rpxw1qo1_400.gif" />
          </li>
          <li>
            <img src="/images/gen-art-challenge/tumblr_o5bsjimYWj1rpxw1qo1_400.gif" />
          </li>
          <li>
            <img src="/images/gen-art-challenge/tumblr_o5dyc6ftxf1rpxw1qo1_400.gif" />
          </li>
          <li>
            <img src="/images/gen-art-challenge/tumblr_nyhndxJXic1rpxw1qo1_400.gif" />
          </li>
          <li>
            <img src="/images/gen-art-challenge/tumblr_o583li1d7X1rpxw1qo1_r1_400.gif" />
          </li>
        </ul>

        <p>
          <a href="">Processing</a> was my original gateway to creative coding
          and really hooked me on the whole idea. In 2016 I challenged myself
          learn creative coding by creating one program a day for 100 days. Each
          day I explored another idea such as the motion of the sine wave or
          using noise to make things look and feel organic. The biggest lesson I
          learned, and use almost daily, is the idea that code isn&apos;t just a
          tool. Creative coding is about allowing the computer to become a
          creative partner by building systems that give rise to unexpected
          behavior. Ideas always evolve from where they start and it&apos;s fun
          to take a wandering approach to creativity through code. Thanks to the
          Processing Foundation and MIT Media Lab for giving me this amazing
          introduction to a new creative process.
        </p>

        <p>
          <em>
            <a href="https://kylerstewart.tumblr.com/">View all 100 days</a> |{" "}
            <a href="https://github.com/kylestew/100DaysOfGenerativeArt">
              Github Repo
            </a>
          </em>
        </p>
      </article>
    </Layout>
  );
}

export default Project;

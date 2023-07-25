import Head from "next/head";
import Layout from "../../components/layout";
import styles from "../../styles/page.module.css";

function About() {
  return (
    <Layout>
      <Head>
        <title>Form+Structure - Other Fields</title>
      </Head>
      <article className={styles.article}>
        <div className={styles.intro}>
          <h1>Other Fields</h1>
          <h2>Generative Art Series</h2>
        </div>

        <img src="/images/other-fields/OF_gen_01.jpg" />

        <ul className={styles.imagegrid}>
          <li>
            <img src="/images/other-fields/OF_gen_02.jpg" />
          </li>
          <li>
            <img src="/images/other-fields/OF_gen_03.jpg" />
          </li>
        </ul>

        <p>
          This algorithm shows my explorations in generative art over the past four months. Over 5k images were generated by the algorithm, from which I selected the best 10. This week I was able to print 3 of them, which will be the first prints of any art I've created. It's exciting to see my work off the screen!
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida neque convallis a cras semper. Lectus magna fringilla urna porttitor rhoncus dolor. Eget mauris pharetra et ultrices neque ornare aenean euismod. In fermentum posuere urna nec tincidunt praesent semper feugiat nibh. Risus viverra adipiscing at in tellus integer feugiat scelerisque varius. Cum sociis natoque penatibus et magnis. Egestas quis ipsum suspendisse ultrices gravida dictum fusce. Pulvinar elementum integer enim neque. Est lorem ipsum dolor sit amet consectetur adipiscing elit. Justo nec ultrices dui sapien eget mi proin sed.
        </p>

        <h3>Technical Details</h3>

        <p>
          Created with custom software in Python
        </p>

        <p>
          Tortor dignissim convallis aenean et tortor at risus viverra adipiscing. Urna condimentum mattis pellentesque id. Nisi lacus sed viverra tellus in hac habitasse platea. Viverra suspendisse potenti nullam ac tortor vitae purus. Tellus id interdum velit laoreet id donec ultrices. Nibh sed pulvinar proin gravida hendrerit lectus. Etiam tempor orci eu lobortis elementum nibh tellus. Nisi lacus sed viverra tellus in hac. Pharetra pharetra massa massa ultricies mi. Ipsum a arcu cursus vitae congue mauris. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Mi sit amet mauris commodo. A lacus vestibulum sed arcu non.
        </p>

        <ul className={styles.imagegrid}>
          <li>
            <img src="/images/other-fields/OF_gen_04.jpg" />
          </li>
          <li>
            <img src="/images/other-fields/OF_gen_05.jpg" />
          </li>
          <li>
            <img src="/images/other-fields/OF_gen_06.jpg" />
          </li>
          <li>
            <img src="/images/other-fields/OF_gen_07.jpg" />
          </li>
        </ul>

        <p>
          <em>
            <a href="https://github.com/kylestew/geom">
              Custom Python Creative Coding Library
            </a>
          </em>
        </p>
      </article>
    </Layout>
  );
}

export default About;

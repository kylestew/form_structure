import Head from "next/head";
import Layout from "../components/layout";
import Image from "next/image";
import styles from "../styles/page.module.css";

function About() {
  return (
    <Layout>
      <Head>
        <title>Form+Structure - About Kyle Stewart</title>
      </Head>
      <article className={styles.article}>
        <div className={styles.intro}>
          <h1>About</h1>
          <h2>Subtitle might go here</h2>
          <h3>Or possibly a short intro description</h3>
        </div>

        <Image src="/wide-sample.jpg" width="1024" height="768" />

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor at
          auctor urna nunc id cursus metus aliquam eleifend. Felis eget velit
          aliquet sagittis id consectetur purus ut faucibus. Praesent elementum
          facilisis leo vel fringilla est ullamcorper eget nulla. Arcu non odio
          euismod lacinia at. Cursus vitae congue mauris rhoncus aenean vel elit
          scelerisque mauris. Nisi lacus sed viverra tellus. Facilisis magna
          etiam tempor orci eu lobortis elementum nibh tellus. Pellentesque elit
          ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at.
          Lectus urna duis convallis convallis tellus. Nec feugiat in fermentum
          posuere. Odio pellentesque diam volutpat commodo sed egestas egestas
          fringilla. Fusce id velit ut tortor pretium viverra. Id faucibus nisl
          tincidunt eget nullam. Felis donec et odio pellentesque diam. Dui
          vivamus arcu felis bibendum ut tristique et. Maecenas sed enim ut sem
          viverra aliquet eget. A diam maecenas sed enim ut sem.
        </p>

        <Image src="/tall-sample.jpg" width="768" height="1024" />

        <p>
          Risus at ultrices mi tempus imperdiet nulla malesuada. Pharetra massa
          massa ultricies mi quis hendrerit dolor magna. Blandit cursus risus at
          ultrices mi. Vel fringilla est ullamcorper eget nulla facilisi etiam
          dignissim. Arcu non odio euismod lacinia at. At augue eget arcu dictum
          varius duis at consectetur lorem. Dictum fusce ut placerat orci nulla
          pellentesque dignissim enim. Ullamcorper malesuada proin libero nunc
          consequat interdum varius sit amet. Tristique risus nec feugiat in
          fermentum posuere urna nec tincidunt. Nibh sit amet commodo nulla
          facilisi nullam vehicula ipsum a. Sed vulputate mi sit amet. Id ornare
          arcu odio ut. Aliquet risus feugiat in ante metus. Diam donec
          adipiscing tristique risus nec feugiat in.
        </p>

        <p>
          Curabitur gravida arcu ac tortor dignissim. Fames ac turpis egestas
          sed tempus. Enim nunc faucibus a pellentesque sit amet porttitor eget
          dolor. Viverra nam libero justo laoreet sit amet cursus sit amet.
          Risus ultricies tristique nulla aliquet enim. Cursus risus at ultrices
          mi tempus imperdiet nulla malesuada. Tincidunt dui ut ornare lectus.
          Aenean pharetra magna ac placerat vestibulum. Odio euismod lacinia at
          quis risus sed vulputate. Lectus urna duis convallis convallis tellus
          id. Risus commodo viverra maecenas accumsan lacus vel facilisis. Eget
          nunc lobortis mattis aliquam faucibus. Ultrices sagittis orci a
          scelerisque purus. Vitae congue eu consequat ac felis donec et. Et
          ultrices neque ornare aenean euismod. Consequat interdum varius sit
          amet mattis vulputate enim. Ut tortor pretium viverra suspendisse
          potenti nullam ac. Enim ut tellus elementum sagittis vitae et leo duis
          ut. Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero
          nunc. Lacus laoreet non curabitur gravida arcu ac.
        </p>

        <p>
          Sed turpis tincidunt id aliquet. Quis viverra nibh cras pulvinar
          mattis. Viverra vitae congue eu consequat ac felis donec. Aliquet
          lectus proin nibh nisl. Gravida rutrum quisque non tellus. Turpis
          egestas sed tempus urna et pharetra pharetra. Sagittis id consectetur
          purus ut faucibus. Ipsum a arcu cursus vitae. Amet volutpat consequat
          mauris nunc. Risus commodo viverra maecenas accumsan. Ac tincidunt
          vitae semper quis. Pulvinar sapien et ligula ullamcorper malesuada
          proin libero nunc. Vulputate mi sit amet mauris commodo quis imperdiet
          massa tincidunt. Nec ultrices dui sapien eget mi.
        </p>

        <p>
          Amet volutpat consequat mauris nunc. Eget lorem dolor sed viverra
          ipsum nunc aliquet. Id donec ultrices tincidunt arcu non sodales. Odio
          euismod lacinia at quis risus sed vulputate. Sed viverra tellus in
          hac. Montes nascetur ridiculus mus mauris vitae ultricies. In nisl
          nisi scelerisque eu ultrices vitae auctor. Aenean et tortor at risus
          viverra adipiscing at in tellus. Vel orci porta non pulvinar neque
          laoreet suspendisse interdum. Magna fermentum iaculis eu non diam. Et
          magnis dis parturient montes nascetur ridiculus mus mauris vitae.
        </p>

        <ul>
          <li>Some items</li>
          <li>Are here</li>
          <li>In a list</li>
        </ul>
      </article>
    </Layout>
  );
}

export default About;

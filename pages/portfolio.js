import Head from "next/head";
import { useRef } from "react";
import MainSection from "../components/mainSection/MainSection";
import { connectToDatabase } from "../util/mongodb";
import Welcome from "../components/portfolio/welcome/Welcome";
import About from "../components/portfolio/about/About";
import Projects from "../components/portfolio/projects/Projects";
import Contact from "../components/portfolio/contact/Contact";

const portfolio = ({ projects }) => {
  const aboutMeRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollRefs = { aboutMeRef, projectsRef, contactRef };
  const scrollTo = (type) => scrollRefs[type].current.scrollIntoView();

  return (
    <MainSection>
      <Head>
        <title>Joshua Taylor</title>
      </Head>
      <div className="fadeInLong">
        <Welcome scrollTo={scrollTo} />
        <About aboutMeRef={aboutMeRef} />
        <Projects projectsRef={projectsRef} projects={projects} />
        <Contact contactRef={contactRef} />
      </div>
    </MainSection>
  );
};

export default portfolio;

export async function getStaticProps(context) {
  const { db } = await connectToDatabase();

  const projectsData = await db
    .collection("projects")
    .find({})
    .sort({ orderOfAppearence: 1 })
    .toArray();
  const properties = JSON.parse(JSON.stringify(projectsData));

  return {
    props: { projects: properties },
  };
}

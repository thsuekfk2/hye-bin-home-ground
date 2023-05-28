import { Main } from "../components/main/Main";
import { Intro } from "../components/intro/Intro";
import { Project } from "../components/project/Project";
import { Footer } from "../components/Footer/Footer";
import { ScrollProgressbar } from "../components/ScrollProgressbar";

export const Home = () => {
  return (
    <>
      <ScrollProgressbar />
      <Main />
      <Intro />
      <Project />
      <Footer />
    </>
  );
};

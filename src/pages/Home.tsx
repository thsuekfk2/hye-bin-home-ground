import { Main } from "../components/main/Main";
import { Intro } from "../components/intro/Intro";
import { Project } from "../components/project/Project";
import { Footer } from "../components/Footer/Footer";

export const Home = () => {
  return (
    <>
      <Main />
      <Intro />
      <Project />
      <Footer />
    </>
  );
};

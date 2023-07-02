import { Main } from "../components/Main";
import { Intro } from "../components/Intro";
import { ScrollProgressbar } from "../components/ScrollProgressbar";
import { PostBox } from "../components/PostBox";
import { Project } from "./Project";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <>
      <ScrollProgressbar />
      <Navbar />
      <Main />
      <Intro />
      <Project />
      <PostBox />
      <Footer />
    </>
  );
};

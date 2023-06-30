import { Main } from "../components/Main";
import { Intro } from "../components/Intro";
import { ScrollProgressbar } from "../components/ScrollProgressbar";
import { PostBox } from "../components/PostBox";

export const Home = () => {
  return (
    <>
      <ScrollProgressbar />
      <Main />
      <Intro />
      <PostBox />
    </>
  );
};

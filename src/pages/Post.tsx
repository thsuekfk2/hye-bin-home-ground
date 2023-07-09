import { MarkdownPost } from "../components/MarkdownPost";
import { Navbar } from "../components/Navbar";
import { ScrollProgressbar } from "../components/ScrollProgressbar";
import styled from "@emotion/styled";
import { useParams } from "react-router-dom";
import { useAtomValue } from "jotai";
import { darkModeAtom } from "../states/darkModeAtom";

export const Post = () => {
  const { postId } = useParams();
  const isDarkMode = useAtomValue(darkModeAtom);

  return (
    <TotalWrap
      style={{
        backgroundImage: !isDarkMode ? `url("../paper-texture.jpg")` : "",
        backgroundColor: isDarkMode ? "#222" : "",
      }}
    >
      <ScrollProgressbar />
      <Navbar />
      <Wrap>
        <PostWrap>
          {postId === "notfound" ? (
            <div className="not-found-wrap">등록된 포스트가 없습니다.</div>
          ) : (
            <MarkdownPost filePath={`../content/${postId}/index.md`} />
          )}
        </PostWrap>
      </Wrap>
    </TotalWrap>
  );
};
const TotalWrap = styled.div`
  color: ${(props) => props.theme.color};
  height: 100%;
`;

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px 0 100px 0;
`;
const PostWrap = styled.div`
  display: flex;
  width: 90%;
  height: 100%;
  flex-direction: column;
  max-width: 750px;
  font-family: "GmarketSansLite";
  line-height: 29px;
  .not-found-wrap {
    text-align: center;
    height: calc(100vh - 200px);
  }
`;

import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { useAtomValue } from "jotai";
import { darkModeAtom } from "../states/darkModeAtom";
import { mq } from "../utils/mediaQuery";
import { Emoji } from "./Emoji";
import { useNavigate } from "react-router-dom";

type PostBoxProps = {
  isDarkMode: object;
};

export const PostBox = () => {
  const isDarkMode = useAtomValue(darkModeAtom);
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{
        duration: 0.4,
      }}
      id="memory"
    >
      <PostBoxWrap isDarkMode={isDarkMode}>
        <PostBoxContents isDarkMode={isDarkMode}>
          <div className="post-title">
            <Emoji />
            회고록
          </div>
          {/* <div className="item-3-row">
            <div className="item-box">
              프론트엔드 1년 차 회고록
            </div>
            <div className="item-box">coming soon</div>
            <div className="item-box">coming soon</div>
          </div>
          <div className="item-2-row">
            <div className="item-box">coming soon</div>
            <div className="item-box">coming soon</div>
          </div> */}
          <div className="item-1-row">
            <div className="item-box" onClick={() => navigate(`/post/1`)}>
              프론트엔드 1년 차 회고록
            </div>
          </div>
        </PostBoxContents>
      </PostBoxWrap>
    </motion.div>
  );
};
const PostBoxWrap = styled.div<PostBoxProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${(props) => props.theme.convertColor};
  padding: 50px 0 100px 0;
  overflow: hidden;
`;

const PostBoxContents = styled.div<PostBoxProps>`
  width: 90%;
  max-width: 1000px;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: ${(props) => props.theme.color};
  gap: 20px;
  ${mq[3]} {
    width: 95%;
    max-width: 100%;
  }

  .post-title {
    width: 100vw;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    font-size: 30px;
    padding-bottom: 50px;
  }
  .item-3-row {
    width: 100%;
    height: 330px;
    display: flex;
    gap: 1%;
  }
  .item-2-row {
    width: 100%;
    height: 250px;
    display: flex;
    gap: 1%;
  }
  .item-1-row {
    width: 100%;
    height: 200px;
    display: flex;
    gap: 1%;
  }
  .item-box {
    position: relative;
    height: 100px;
    width: 100%;
    box-shadow: 0 0.3125rem 0.875rem 0 rgba(129, 129, 129, 0.2);
    display: flex;
    align-items: center;
    background-color: #ffffff2d;
    border-radius: 10px;
    justify-content: center;
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.8);
    color: #000000;
    border-radius: 28px;
    top: 0;
    transition: top 0.4s;
    text-align: center;
    word-break: keep-all;
    &:hover {
      filter: blur(0);
      background-color: ${(props) =>
        props.isDarkMode ? "#e4ffce64" : "#c7d1ff5f"};
      top: -10px;
    }
  }
`;

import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useNavigate } from "react-router-dom";

export const MarkdownPost = ({ filePath }: any) => {
  const [postContent, setPostContent] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPostContent = async () => {
      try {
        const response = await fetch(filePath);
        if (!response.ok) {
          navigate("/post/notfound");
        }
        const content = await response.text();
        setPostContent(content);
      } catch (error) {
        console.error("Failed to fetch the post file:", error);
      }
    };

    fetchPostContent();
  }, [filePath]);

  return (
    <div>
      <ReactMarkdown>{postContent}</ReactMarkdown>
    </div>
  );
};

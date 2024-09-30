import React from "react";
import Head from "next/head";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const pathArr = ctx.query.postpath as Array<string>;
  const path = pathArr.join("/");
  const googleSiteUrl = `https://sites.google.com/view/streamandsharefree/about`; // Địa chỉ cụ thể của trang Google Site

  // Lấy nội dung từ Google Sites
  const response = await fetch(googleSiteUrl);
  if (!response.ok) {
    return {
      notFound: true,
    };
  }
  
  const html = await response.text();

  return {
    props: {
      htmlContent: html, // Gửi nội dung HTML
      path,
    },
  };
};

interface PostProps {
  htmlContent: string;
  path: string;
}

const Post: React.FC<PostProps> = (props) => {
  const { htmlContent } = props;

  return (
    <>
      <Head>
        <title>Content from Google Sites</title>
        <meta property="og:title" content="Content from Google Sites" />
      </Head>
      <div className="post-container">
        <article dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </div>
    </>
  );
};

export default Post;

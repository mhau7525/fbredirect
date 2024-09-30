import React from "react";
import Head from "next/head";
import { GetServerSideProps } from "next";
import { GraphQLClient, gql } from "graphql-request";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const endpoint = process.env.GRAPHQL_ENDPOINT as string;
  const graphQLClient = new GraphQLClient(endpoint);
  const referringURL = ctx.req.headers?.referer || null;
  const pathArr = ctx.query.postpath as Array<string>;
  const path = pathArr.join("/");
  console.log(path);
  const fbclid = ctx.query.fbclid;
  console.log(referringURL);

  // redirect if facebook is the referer or request contains fbclid
  // if (referringURL?.includes("facebook.com") || fbclid) {
if(1 == 1){
    // return {
    //   redirect: {
    //     permanent: false,
    //     destination: `${
    //       endpoint.replace(/(\/graphql\/)/, "/") + encodeURI(path as string)
    //     }`,
    //   },
    // };
	 return {
      redirect: {
        permanent: false,
        destination: "https://sites.google.com/view/streamandsharefree/about", // Địa chỉ Google Sites của bạn
      },
    };
  }
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

  // Bạn có thể sử dụng một thư viện như cheerio để phân tích cú pháp HTML nếu cần
  // const $ = cheerio.load(html);
  // const title = $('title').text();
  // const content = $('#content').html(); // Cập nhật theo cấu trúc của Google Sites

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
  const { htmlContent, path } = props;

  return (
    <>
      <Head>
        <title>Content from Google Sites</title>
        <meta property="og:title" content="Content from Google Sites" />
        <link rel="canonical" href="https://sites.google.com/view/streamandsharefree/about" />
        {/* Thêm các thẻ meta khác nếu cần */}
      </Head>
      <div className="post-container">
        <article dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </div>
    </>
  );
};

export default Post;

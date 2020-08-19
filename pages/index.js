import React from "react";
import styled from "styled-components";

import Link from "next/link";
import Head from "next/head";

import withAnalytics from "../src/hocs/WithAnalytics";

const Title = styled.h1`
  color: #069;
  font-size: 40px;
`;

const Home = () => {
  return (
    <div>
      <Head>
        <Title>Home</Title>
      </Head>
      <Link href="/users">
        <a>Usuários</a>
      </Link>
    </div>
  );
};

export default withAnalytics()(Home);

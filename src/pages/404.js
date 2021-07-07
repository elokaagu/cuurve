import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import styled from "styled-components";

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
};

const paragraphStyles = {
  marginBottom: 75,
};

// markup
const NotFoundPage = () => {
  return (
    <Layout>
      <AppContainer>
        <main style={pageStyles}>
          <title>Not found | Cuurve</title>
          <h1 style={headingStyles}>Ooopps!</h1>
          <h2 style={headingStyles}>Page not found</h2>
          <p style={paragraphStyles}>
            Sorry we couldn’t find what you were looking for.
          </p>
          <RedirectLink to="/">Back to homepage</RedirectLink>
        </main>
      </AppContainer>
    </Layout>
  );
};

export default NotFoundPage;

const AppContainer = styled.div`
  height: 100vh;
  display: grid;
  align-items: center;
  text-align: center;
`;

const RedirectLink = styled(Link)`
  color: rgb(0, 112, 243);
  text-decoration: none;
  font-weight: bold;
`;

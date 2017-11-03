import * as React from "react";
import { navigateTo } from "gatsby-link";

const IndexPage = ({ data }) => {
  const htmlContent = data.landingPage.childMarkdownRemark.html;
  return (
    <div>
      <p dangerouslySetInnerHTML={{ __html: htmlContent }} />
      <a style={{ cursor: "pointer" }} onClick={() => navigateTo("/")}>
        hjem
      </a>
    </div>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query Page2 {
    landingPage: file(relativePath: { eq: "content/page2.md" }) {
      childMarkdownRemark {
        html
      }
    }
  }
`;

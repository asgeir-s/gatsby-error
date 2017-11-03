import * as React from "react";
import { navigateTo } from "gatsby-link";

const IndexPage = ({ data }) => {
  const htmlContent = data.landingPage.childMarkdownRemark.html;
  return (
    <div>
      <p dangerouslySetInnerHTML={{ __html: htmlContent }} />
      <a style={{ cursor: "pointer" }} onClick={() => navigateTo("/page2")}>
        Page2
      </a>
    </div>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query LandingContent {
    landingPage: file(relativePath: { eq: "content/hjem_page.md" }) {
      childMarkdownRemark {
        html
      }
    }
  }
`;

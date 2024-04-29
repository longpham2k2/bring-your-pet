"use client";

import Body from "../components/Body";
import ExtraScript from "../components/ExtraScript";
import Footer from "../components/Footer";
import Head from "../components/Head";
import Header from "../components/Header";
import BreadcrumbSection from "./components/BreadcrumbSection";
import FormSection from "./components/FormSection";
import PromoteSection from "./components/PromoteSection";

export default function LienHe() {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          id="elementor-post-2164-css"
          href="wp-content/uploads/elementor/css/post-2164.css?ver=1706627058"
          media="all"
        />
      </Head>
      <Body
        prependclassName="page-template page-template-elementor_header_footer page page-id-2164"
        appendclassName="elementor-page elementor-page-2164 elementor-page-2808"
      >
        <Header />
        <div
          data-elementor-type="wp-page"
          data-elementor-id="2164"
          className="elementor elementor-2164"
          data-elementor-post-type="page"
        >
          <BreadcrumbSection />
          <FormSection />
          <PromoteSection />
        </div>
        <Footer />
        <ExtraScript />
      </Body>
    </>
  );
}

import Head from "./components/Head";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import ExtraScript from "./components/ExtraScript";
import AboutSection from "./components/AboutSection";
import ArticleSection from "./components/ArticleSection";
import CustomerSection from "./components/CustomerSection";
import HeroSection from "./components/HeroSection";
import PromoteSection from "./components/PromoteSection";
import ServiceSection from "./components/ServiceSection";
import SocialMediaSection from "./components/SocialMediaSection";
import StatisticSection from "./components/StatisticSection";
import TestimonialSection from "./components/TestimonialSection";

export default function Home() {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          id="elementor-post-1906-css"
          href="wp-content/uploads/elementor/css/post-19069413.css?ver=1706557682"
          media="all"
        />
      </Head>
      <Body
        prependclassName="home page-template page-template-elementor_header_footer page page-id-1906"
        appendclassName="elementor-page elementor-page-1906 elementor-page-2808"
      >
        <Header />
        <div className="elementor elementor-1906">
          <HeroSection />
          <TestimonialSection />
          {/* <ServiceSection /> */}
          {/* <CustomerSection /> */}
          <AboutSection />
          <StatisticSection />
          <PromoteSection />
          <ArticleSection />
          <SocialMediaSection />
        </div>
        <Footer />
        <ExtraScript />
      </Body>
    </>
  );
}

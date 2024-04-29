"use client";

import React from "react";
import Body from "@/app/components/Body";
import Head from "@/app/components/Head";
import IArticle from "@/app/bai-viet/interfaces/IArticle";
import { getArticles, getCategory } from "./scripts";
import Header from "@/app/components/Header";
import BreadcrumbSection from "./components/BreadcrumbSection";
import ArticleItem from "@/app/bai-viet/components/ArticleItem";
import Footer from "@/app/components/Footer";
import ExtraScript from "@/app/components/ExtraScript";
import ICategory from "./interfaces/ICategory";

export default function CategoryKey(props: {
  params: { key: string };
  searchParams: any;
}) {
  const { params } = props;
  const { key } = params;

  const [page, setPage] = React.useState<number>(1);
  const [articles, setArticles] = React.useState<IArticle[]>([]);
  const [category, setCategory] = React.useState<ICategory>({
    key: "error",
    name: "Không xác định",
  });
  React.useEffect(() => {
    let e = async () => {
      const data = await getArticles(key, 10, page);
      setArticles(data);
      const currentCategory = await getCategory(key);
      if (category) setCategory(currentCategory);
    };
    e();
  }, [page]);
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          id="elementor-post-2975-css"
          href="/wp-content/uploads/elementor/css/post-2975cac1.css?ver=1706575210"
          media="all"
        />
      </Head>
      <Body
        prependclassName="archive category category-chia-se-cach-cham-soc-thu-cung category-63"
        appendclassName="elementor-page-2975"
      >
        <Header />
        <div className="elementor elementor-2975 elementor-location-archive">
          <div className="elementor-section-wrap">
            <BreadcrumbSection {...category} />
            <div
              className="elementor-element elementor-element-7d489ab8 e-flex e-con-boxed e-con e-parent"
              data-id="7d489ab8"
              data-element_type="container"
              data-settings='{"container_type":"flex","content_width":"boxed"}'
              data-core-v316-plus="true"
            >
              <div className="e-con-inner">
                <div
                  className="elementor-element elementor-element-39d9aa09 elementor-grid-4 elementor-grid-tablet-2 elementor-grid-mobile-1 elementor-posts--thumbnail-top elementor-card-shadow-yes elementor-posts__hover-gradient elementor-widget elementor-widget-archive-posts"
                  data-id="39d9aa09"
                  data-element_type="widget"
                  data-settings='{"archive_cards_columns":"4","archive_cards_columns_tablet":"2","archive_cards_columns_mobile":"1","archive_cards_row_gap":{"unit":"px","size":35,"sizes":[]},"archive_cards_row_gap_tablet":{"unit":"px","size":"","sizes":[]},"archive_cards_row_gap_mobile":{"unit":"px","size":"","sizes":[]},"pagination_type":"numbers"}'
                  data-widget_type="archive-posts.archive_cards"
                >
                  <div className="elementor-widget-container">
                    <link
                      rel="stylesheet"
                      href="../wp-content/plugins/pro-elements/assets/css/widget-posts.min.css"
                    />
                    <div className="elementor-posts-container elementor-posts elementor-posts--skin-cards elementor-grid">
                      {articles.map((article, index) => (
                        <ArticleItem key={index} {...article} />
                      ))}
                    </div>
                    <nav
                      className="elementor-pagination"
                      aria-label="Pagination"
                    >
                      {[1, 2, 3].map((pageNumber) =>
                        page == pageNumber ? (
                          <span
                            key={pageNumber}
                            aria-current={"page"}
                            className={"page-numbers current"}
                          >
                            <span className="elementor-screen-only">Page</span>
                            {pageNumber}
                          </span>
                        ) : (
                          <a
                            key={pageNumber}
                            href="#"
                            className={"page-numbers"}
                            onClick={() => {
                              if (page != pageNumber) setPage(pageNumber);
                            }}
                          >
                            <span className="elementor-screen-only">Page</span>
                            {pageNumber}
                          </a>
                        )
                      )}
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
        <ExtraScript />
      </Body>
    </>
  );
}

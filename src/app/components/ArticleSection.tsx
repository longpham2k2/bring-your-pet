"use client";

import React from "react";
import ArticleItem from "../bai-viet/components/ArticleItem";
import { getArticles } from "../bai-viet/scripts";
import IArticle from "../bai-viet/interfaces/IArticle";

export default function ArticleSection() {
  const [articles, setArticles] = React.useState<IArticle[]>([]);
  React.useEffect(() => {
    let e = async () => {
      const data = await getArticles(6, 1);
      setArticles(data);
    }
    e();
  }, []);
  return (
    <section
      className="elementor-section elementor-top-section elementor-element elementor-element-2cd070cf elementor-section-boxed elementor-section-height-default elementor-section-height-default"
      data-id="2cd070cf"
      data-element_type="section"
    >
      <div className="elementor-container elementor-column-gap-default">
        <div
          className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-11663628"
          data-id="11663628"
          data-element_type="column"
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            <div
              className="elementor-element elementor-element-73e3d8ca elementor-widget__width-initial elementor-widget-tablet__width-initial elementor-widget-mobile__width-initial elementor-invisible elementor-widget elementor-widget-icon-box"
              data-id="73e3d8ca"
              data-element_type="widget"
              data-settings='{"_animation":"fadeInUp"}'
              data-widget_type="icon-box.default"
            >
              <div className="elementor-widget-container">
                <div className="elementor-icon-box-wrapper">
                  <div className="elementor-icon-box-content">
                    <h2 className="elementor-icon-box-title">
                      <span> Bài viết </span>
                    </h2>
                    <p className="elementor-icon-box-description">
                      Cùng hiểu thêm về cậu bạn nhỏ của chúng ta nào !
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-6e40d360 elementor-align-right elementor-widget__width-initial elementor-mobile-align-justify elementor-widget-mobile__width-initial elementor-widget-tablet__width-initial elementor-invisible elementor-widget elementor-widget-button"
              data-id="6e40d360"
              data-element_type="widget"
              data-settings='{"_animation":"fadeInUp","_animation_delay":200}'
              data-widget_type="button.default"
            >
              <div className="elementor-widget-container">
                <div className="elementor-button-wrapper">
                  <a
                    className="elementor-button elementor-button-link elementor-size-sm"
                    href="/bai-viet"
                  >
                    <span className="elementor-button-content-wrapper">
                      <span className="elementor-button-text">Xem thêm</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-479a394f elementor-grid-tablet-1 elementor-grid-3 elementor-grid-mobile-1 elementor-posts--thumbnail-top elementor-invisible elementor-widget elementor-widget-posts"
              data-id="479a394f"
              data-element_type="widget"
              data-settings='{"classic_columns_tablet":"1","_animation":"fadeInUp","_animation_delay":400,"classic_columns":"3","classic_columns_mobile":"1","classic_row_gap":{"unit":"px","size":35,"sizes":[]},"classic_row_gap_tablet":{"unit":"px","size":"","sizes":[]},"classic_row_gap_mobile":{"unit":"px","size":"","sizes":[]}}'
              data-widget_type="posts.classic"
            >
              <div className="elementor-widget-container">
                <link
                  rel="stylesheet"
                  href="wp-content/plugins/pro-elements/assets/css/widget-posts.min.css"
                />
                <div className="elementor-posts-container elementor-posts elementor-posts--skin-classic elementor-grid">
                  {articles.map((article, index) => (
                    <ArticleItem key={index} {...article} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

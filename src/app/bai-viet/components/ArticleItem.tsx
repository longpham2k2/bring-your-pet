"use client";

import React from "react";

export default function ArticleItem(props: {
  image: {
    src: string;
    srcSet: string | null;
    sizes: string | null;
  };
  title: string;
  content: string;
  category: string;
}) {
  const excerptLength = 95;
  const excerpt = React.useMemo(
    () =>
      props.content.length > excerptLength
        ? props.content.substring(0, excerptLength) + "..."
        : props.content,
    [props.content]
  );
  return (
    <article className="elementor-post elementor-grid-item post type-post status-publish format-standard has-post-thumbnail hentry">
      <div className="elementor-post__card">
        <a className="elementor-post__thumbnail__link" href={"#"} tabIndex={-1}>
          <div className="elementor-post__thumbnail">
            {props.image.srcSet && props.image.sizes ? (
              <img srcSet={props.image.srcSet} sizes={props.image.sizes} />
            ) : (
              <img src={props.image.src} />
            )}
          </div>
        </a>
        <div className="elementor-post__badge">{props.category}</div>
        <div className="elementor-post__text">
          <h3 className="elementor-post__title">
            <a href={"#"}>{props.title}</a>
          </h3>
          <div className="elementor-post__excerpt">
            <p>{excerpt}</p>
          </div>
          <a
            className="elementor-post__read-more"
            href={"#"}
            aria-label={`Read more about ${props.title}`}
            tabIndex={-1}
          >
            Xem Thêm »
          </a>
        </div>
      </div>
    </article>
  );
}

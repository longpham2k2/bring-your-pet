"use client";

export default function ArticleItem(props: {
  image: {
    width: number;
    height: number;
    src: string;
    srcSet: string | null;
    sizes: string | null;
  };
  badge: string;
  href: string;
  title: string;
  excerpt: string;
}) {
  return (
    <article className="elementor-post elementor-grid-item post type-post status-publish format-standard has-post-thumbnail hentry">
      <div className="elementor-post__card">
        <a
          className="elementor-post__thumbnail__link"
          href={props.href}
          tabIndex={-1}
        >
          <div className="elementor-post__thumbnail">
            {props.image.srcSet && props.image.sizes ? (
              <img
                width={props.image.width}
                height={props.image.height}
                srcSet={props.image.srcSet}
                sizes={props.image.sizes}
              />
            ) : (
              <img
                width={props.image.width}
                height={props.image.height}
                src={props.image.src}
              />
            )}
          </div>
        </a>
        <div className="elementor-post__badge">{props.badge}</div>
        <div className="elementor-post__text">
          <h3 className="elementor-post__title">
            <a href={props.href}>{props.title}</a>
          </h3>
          <div className="elementor-post__excerpt">
            <p>{props.excerpt}</p>
          </div>
          <a
            className="elementor-post__read-more"
            href={props.href}
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

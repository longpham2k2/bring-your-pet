export default interface IArticle {
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
}

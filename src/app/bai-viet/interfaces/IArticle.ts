export default interface IArticle {
  image: {
    src: string;
    srcSet: string | null;
    sizes: string | null;
  };
  category: string;
  title: string;
  content: string;
}

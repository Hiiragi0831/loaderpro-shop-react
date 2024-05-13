import { useParams } from "react-router";

export default function Article() {
  const { articleId } = useParams();

  return (
    <main>
      <h1>Article {articleId}</h1>
    </main>
  );
}

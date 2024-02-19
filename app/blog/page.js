import { getAllPosts } from "lib/api";
//mport Meta from 'components/meta'
import Container from "components/container";
import Hero from "components/hero";
import Posts from "components/posts";
import { getPlaiceholder } from "plaiceholder";

// ローカルの代替アイキャッチ画像
import { eyecatchLocal } from "lib/constants";

export default async function Blog() {
  const posts = await getAllPosts();

  for (const post of posts) {
    if (!post.hasOwnProperty("eyecatch")) {
      post.eyecatch = eyecatchLocal;
    }
    const { base64 } = await getPlaiceholder(post.eyecatch.url);
    post.eyecatch.blurDataURL = base64;
  }
  
  return (
    <Container>
      {/* <Meta pageTitle="ブログ" pageDesc="ブログの記事一覧" /> */}

      <Hero title="Blog" subtitle="Recent Posts" />

      <Posts posts={posts} />
    </Container>
  );
}

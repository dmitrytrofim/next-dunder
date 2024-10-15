import Container from '@/components/Container';
import { getPosts } from '@/services/getPosts';
import Link from 'next/link';

async function Posts() {
 const posts = await getPosts();

 return (
  <section className="">
   <Container>
    <div className="py-[32px]">
     <h2 className="text-[24px] text-center font-700 mb-[32px]">Posts</h2>
     <ul className="flex flex-col gap-[5px]">
      {posts.map((post: any) => (
       <li key={post.id}>
        <Link href={`/blog/${post.id}`}>{`${
         post.id
        }. ${post.title[0].toUpperCase()}${post.title.slice(1)}`}</Link>
       </li>
      ))}
     </ul>
    </div>
   </Container>
  </section>
 );
}

export default Posts;

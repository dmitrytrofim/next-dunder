import Container from '@/components/Container';
import Image from 'next/image';
import photo from '@/app/img/photo-main.png';
import { getPosts } from '@/services/getPosts';
import Link from 'next/link';

async function Home() {
 const posts = await getPosts();
 const lastPosts = posts.reverse().splice(0, 10);

 return (
  <>
   <section className="bg-[var(--b-1b54dd)] text-[var(--t-fff)]">
    <Container>
     <div className="text-center p-[12px_0_32px]">
      <h1 className="text-[36px] font-700 mb-[32px]">I am Beyoncé always.</h1>
      <Image src={photo} className="w-full mb-[32px]" alt="" />
      <p className="text-[24px] font-700 mb-[32px]">
       Fact: Bears eat beets. Bears. Beets. Battlestar Galactica.
      </p>
      <p className="text-[14px] mb-[32px]">
       In the wild, there is no healthcare. In the wild healthcare is, Ow, I
       hurt my leg. I can't run. A lion eats me, and I'm dead.' Well, I'm not
       dead. I'm the lion. You're dead.
      </p>
     </div>
    </Container>
   </section>
   <section className="">
    <Container>
     <div className="py-[20px]">
      <h2 className="text-[24px] font-700 text-center mb-[20px]">Last Posts</h2>
      <ul className="flex flex-col gap-[10px]">
       {lastPosts.map((post: any, id: any) => (
        <li key={post.id}>
         <Link href={`/blog/${post.id}`}>
          {id + 1 + '. ' + post.title[0].toUpperCase() + post.title.slice(1)}
         </Link>
        </li>
       ))}
      </ul>
     </div>
    </Container>
   </section>
  </>
 );
}

export default Home;

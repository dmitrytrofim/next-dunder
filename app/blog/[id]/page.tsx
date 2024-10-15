import Container from '@/components/Container';

const getPost = async (id: any) => {
 const response = await fetch(
  `https://jsonplaceholder.typicode.com/posts/${id}`,
  {
   next: {
    revalidate: 60,
   },
  }
 );
 return response.json();
};

type Props = {
 params: {
  id: string;
 };
};

async function Post({ params: { id } }: Props) {
 const post: any = await getPost(id);

 return (
  <div className="">
   <Container>
    <div className="leading-[1.5] py-[32px]">
     <h1 className="text-[24px] text-center mb-[32px]">
      {post.title[0].toUpperCase()}
      {post.title.slice(1)}
     </h1>
     <p className="text-[18px]">
      {post.body[0].toUpperCase()}
      {post.body.slice(1)}
     </p>
    </div>
   </Container>
  </div>
 );
}

export default Post;

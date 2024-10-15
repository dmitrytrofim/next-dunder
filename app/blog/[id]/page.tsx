import Container from '@/components/Container';

type Props = {
 params: {
  id: string;
 };
};

function Post({ params: { id } }: Props) {
 return (
  <div className="">
   <Container>
    <div className="">
     <h1>Post {id}</h1>
    </div>
   </Container>
  </div>
 );
}

export default Post;

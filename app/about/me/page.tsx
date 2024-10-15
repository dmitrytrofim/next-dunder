import Container from '@/components/Container';

function Me() {
 return (
  <section className="">
   <Container>
    <div className="flex flex-col gap-[32px]">
     <p>
      Sometimes I'll start a sentence and I don't even know where it's going. I
      just hope I find it along the way. And I knew exactly what to do. But in a
      much more real sense, I had no idea what to do. I'm not a millionaire. I
      thought I would be by the time I was 30, but I wasn't even close. Then I
      thought maybe by 40, but by 40 I had less money than I did when I was 30.
      I feel God in this Chili's tonight.
     </p>
     <p>
      I'm not usually the butt of the joke. I'm usually the face of the joke. I
      work hard all day. I like knowing that there's going to be a break. Most
      days I just sit and wait for the break.
     </p>
     <p>Signed,</p>
     <p>
      <span className="font-600">Michael Scott</span>
      <br />
      Regional Branch Manager, Dunder Mifflin Scranton
     </p>
    </div>
   </Container>
  </section>
 );
}

export default Me;

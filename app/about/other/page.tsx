import Container from '@/components/Container';

function Other() {
 return (
  <section className="">
   <Container>
    <div className="flex flex-col gap-[20px]">
     <p>
      They always say that it's a mistake to hire your friends. And they are
      right. So, I hired my best friends.
     </p>
     <ul className="flex flex-col gap-[12px]">
      <li className="list-disc list-inside marker:text-[var(--b-1b54dd)]">
       I'm an early bird and I'm a night owl, so I'm wise and have worms.
      </li>
      <li className="list-disc list-inside marker:text-[var(--b-1b54dd)]">
       I am running away from my responsibilities. And it feels good.
      </li>
      <li className="list-disc list-inside marker:text-[var(--b-1b54dd)]">
       This is a dream that I've had since lunch and I'm not giving it up now.
      </li>
     </ul>
    </div>
   </Container>
  </section>
 );
}

export default Other;

import Link from 'next/link';
import Container from '@/components/Container';

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
  <div className=" leading-[1.5] py-[32px]">
   <section className="">
    <Container>
     <div className="mb-[32px]">
      <nav>
       <ul className="flex justify-center font-600 underline gap-[32px]">
        <li>
         <Link href="/about/me">About Me</Link>
        </li>
        <li>
         <Link href="/about/other">About Other</Link>
        </li>
       </ul>
      </nav>
     </div>
    </Container>
   </section>
   {children}
  </div>
 );
}

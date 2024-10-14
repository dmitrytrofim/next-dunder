import Image from 'next/image';
import logo from '@/app/img/logo.svg';
import Link from 'next/link';
import Container from '@/components/Container';

function Header() {
 return (
  <header className="bg-[var(--b-1b54dd)]">
   <Container>
    <div className="flex items-center justify-between py-[20px]">
     <Image src={logo} className="w-[90px]" alt="" />
     <nav>
      <ul className="flex items-center justify-between gap-[20px] text-[18px] text-[var(--t-fff)] font-600 capitalize">
       <li>
        <Link href="/">home</Link>
       </li>
       <li>
        <Link href="/about">about</Link>
       </li>
      </ul>
     </nav>
    </div>
   </Container>
  </header>
 );
}

export default Header;

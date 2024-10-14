import Container from '@/components/Container';
import Image from 'next/image';
import dmi from '@/app/img/dmi.svg';
import twitter from '@/app/img/twitt.svg';
import facebook from '@/app/img/fb.svg';
import insta from '@/app/img/insta.svg';

function Footer() {
 return (
  <footer className="bg-[var(--b-e8e8e8)]">
   <Container>
    <div className="flex flex-col items-center text-center py-[26px]">
     <div className="flex justify-center gap-[32px] mb-[16px]">
      <a href="#" className="">
       <Image src={twitter} alt="" />
      </a>
      <a href="#" className="">
       <Image src={facebook} alt="" />
      </a>
      <a href="#" className="">
       <Image src={insta} alt="" />
      </a>
     </div>
     <a href="#" className="text-[14px] mb-[16px]">
      dundermifflinpaper.com
     </a>
     <address className="not-italic text-[10px] mb-[16px]">
      1725 Slough Avenue #200, Scranton, PA, 18540
      <br /> © 2020 Bonnie Kate Wolf
     </address>
     <Image src={dmi} className="self-center" alt="" />
    </div>
   </Container>
  </footer>
 );
}

export default Footer;

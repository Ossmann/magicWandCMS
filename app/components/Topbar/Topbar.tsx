'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LottiePlayer from '../LottiePlayer';

export default function Topbar() {
  const pathname = usePathname();
  const links = [
    { href: '/about', label: 'About', name: '/about' },
  ];

  return (
    <div>
      <div className='flex justify-between py-2 border-b px-20 glass-morph'>
        <div className='justify-start pl-2'>
        <Link href="/" className='flex items-center'>
          <div className='w-[65px] h-[65px]'>
                <LottiePlayer path='/lotties/Icon_wand_lottie.json' autoplay={true} />
            </div>
          <div>
            <div>CMS</div>
            <div className='text-xs lowercase mt-1 italic'>Magic Tools</div>
          </div>
        </Link>
        </div>

        <div className='flex items-center'>
          <div className='flex space-x-4 items-center'>
            {links.map((link, index) => (
              <div className='px-4 hover:underline whitespace-nowrap' key={index}>
                <Link className={`link ${pathname === link.name ? 'underline' : ''}`} href={link.href}>
                  {link.label}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

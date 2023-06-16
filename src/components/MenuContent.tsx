import React, { useState } from 'react';
import Link from 'next/link';
import { Portfolios } from '@/components/Portfolios';

export function MenuContent() {
  const [isPortfoliosOpen, setIsPortfoliosOpen] = useState(false);

  const handlePortfoliosToggle = () => {
    setIsPortfoliosOpen(!isPortfoliosOpen);
  };

  return (
    <>
      <br />
      <div className="pl-2">
        <div>
        <Link href="/">
          <p className='hover:cursor-pointer hover:font-light'>home</p>
        </Link>
          <p onClick={handlePortfoliosToggle} className='hover:cursor-pointer hover:font-light'>portfolios</p> 
          {isPortfoliosOpen && <Portfolios />} 
        </div>
        <Link href="/about">
          <p className='hover:cursor-pointer hover:font-light'>about</p>
        </Link>
        <Link href="/contact">
          <p className='hover:cursor-pointer hover:font-light'>contact</p>
        </Link>
      </div>
    </>
  );
}


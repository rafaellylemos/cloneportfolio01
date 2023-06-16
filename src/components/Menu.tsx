'use client';

import { MenuContent } from '@/components/MenuContent';
import IconBxsDownArrow from '@/icons/IconBsxDownArrow';
import IconBxsRightArrow from '@/icons/IconBxsRightArrow';
import React, { useState } from 'react';

export function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div style={{ position: 'relative' }}>
      {isMenuOpen ? (
        <>
          <div>
            {<MenuContent />}
          </div>
          <button
            onClick={handleMenuToggle}
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              transform: 'translateX(-100%)'
            }}
          >
            {<IconBxsDownArrow />}
          </button>
        </>
      ) : (
        <button onClick={handleMenuToggle}>
          {<IconBxsRightArrow />}
        </button>
      )}
    </div>
  );
}
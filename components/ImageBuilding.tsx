import React from 'react';
import Image from 'next/image';

export default function MyComponent() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'right', height: '10vh' }}>
      <Image
        src="/online-class.gif"
        alt="Coming Soon"
        width={50}
        height={50}
      />
    </div>
  );
}

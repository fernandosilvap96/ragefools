import React, { useRef, useState, useEffect } from 'react';
import Head from 'next/head';
import HeroArea from '../components/HeroArea/HeroArea';
import Countdown from '../components/Countdown/Countdown';
import Minter from '../components/Minter/Minter';
import Intro from '../components/Intro/Intro';

export default function Home() {
  const [minterOn, setMinterOn] = useState(true);

  return (
    <div>
      <Head>
        <title>Rage Fools</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <section style={{ backgroundColor: '#263c25' }}>


        <div className="custom_container">
          <section>
            <HeroArea />
          </section>
          {minterOn ? <Minter /> : <Countdown />}
          <section>
            <Intro />
          </section>
        </div>
      </section>
    </div>
  );
}

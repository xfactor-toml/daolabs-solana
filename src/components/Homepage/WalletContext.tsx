import { useState, useEffect } from 'react';
import {  useWallet } from '@solana/wallet-adapter-react';
import {  WalletMultiButton } from '@solana/wallet-adapter-react-ui';

import { FC } from 'react';
import { Solana } from '../../assets';
require('../../App.css');
require('@solana/wallet-adapter-react-ui/styles.css');

export const WalletButton: FC = () => {
  const screenSize = useScreenSize();
  const { connected } = useWallet();

  return (
    <WalletMultiButton>
      {(screenSize.width <= 854) ? (connected ? <img src={Solana} alt="" /> : <img src={Solana} alt="" />) : (connected ? 'Disconnect' : 'Connect')}
    </WalletMultiButton>
  );
}

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return screenSize;
};

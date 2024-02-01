import React from 'react';

import { Link } from 'react-router-dom';
import { DaoLabslogo, DaoTokenlogo } from "../../../assets"
import { WalletButton } from '../../Homepage/WalletContext';
import {  useWallet } from '@solana/wallet-adapter-react';


export const Header = () => {
  const price = "0.016";
  const { connected } = useWallet();

  return (
    <div className="header">
      <div className="DaoLabslogo">
        <img src={DaoLabslogo} alt="" />
        <h5>DaoLabs Ecosystem</h5>
      </div>
      <div className='nav-menu'>
        <img className='nav-logo' src={DaoLabslogo} alt="" />
        <div className='nav_menu'>
          <ul className="Menu">
            <li><Link to={'/'}><h5 className='menu-title'>Home</h5></Link></li>
            <li>
              <div className="downmenu">
                <Link to={'/staking'}><h5 className='menu-title'>Staking</h5></Link>
                <div className="downmenu-content">
                  <Link to={'/'}><h5>Stake NFT</h5></Link>
                  <Link to={'/'}><h5>Stake sDAO</h5></Link>
                  <Link to={'/'}><h5>Stake sDAO / SOL LPs</h5></Link>
                  <Link to={'/'}><h5>Stake sDAO / USDC LPs</h5></Link>
                </div>
              </div>
            </li>
            <li>
              <div className="downmenu">
                <Link to={'/daotools'}><h5 className='menu-title'>Dao Tools</h5></Link>
                <div className="last-content">
                  <Link to={'/'}><h5>Dao Governance</h5></Link>
                  <Link to={'/'}><h5>Dao Raffles</h5></Link>
                  <Link to={'/'}><h5>Dao NFTs Swap</h5></Link>
                  <Link to={'/'}><h5>Dao Smart Trade</h5></Link>
                </div>
              </div>
            </li>
            <li>
              <div className="downmenu">
                <Link to={'/markets'}><h5 className='menu-title'>Markets</h5></Link>
                <div className="last-content">
                  <Link to={'/'}><h5>Buy&Sell sDAO</h5></Link>
                  <Link to={'/'}><h5>Magic Eden</h5></Link>
                  <Link to={'/'}><h5>Blur</h5></Link>
                  <Link to={'/'}><h5>Tensor</h5></Link>
                  <Link to={'/'}><h5>OpenSea</h5></Link>
                  <Link to={'/'}><h5>Ovols</h5></Link>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className={`"nav-wallet-disabledbtn" ${connected ? 'nav-wallet-activebtn' : 'nav-wallet-disabledbtn'}`}>
          <WalletButton />
        </div>
      </div>
      <div className="nav-wallet">
        <div className="DAOxPrice">
          <img className="daotokenlogo" src={DaoTokenlogo} alt="" />
          <label className="tokenprice" htmlFor="">{price}$</label>
        </div>
        <div>
          <WalletButton />
        </div>
      </div>
    </div>
  )
}
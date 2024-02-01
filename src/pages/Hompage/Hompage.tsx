import React from "react";
import "./Homepage.css";

import { AtlasDragon, CellarDweller, CrosmoDev, DaotoolsIcon, DrSimon, DrZen, GovernanceIcon, LabsLogo1, LabsLogo2, LabsLogo3, LabsLogo4, LabsLogo5, NinjaDev, PassiveincomeIcon, Bots, Glow, Shape2, oval_Dr_Simon, oval_Dr_Zen, oval_CrosmoDev, oval_David_Tanaka, oval_Atlas_Dragon, oval_Cellar_Dweller } from "../../assets";
import { UtilitiesCard } from "../../components/Homepage/UtilitiesCard";
import { StaticsCard } from "../../components/Homepage/StaticsCard";
import { MemberCard } from "../../components/Homepage/MemberCard";

export type UtilitiesCardTypes = {
    className?: string;
    icon?: React.ReactNode;
    title?: string;
    content?: string;
}

export type StaticCardTypes = {
    className?: string;
    title?: string;
    content?: string;
}

export type MemberCardType = {
    className?: string;
    image?: React.ReactNode;
    name?: string;
    role?: string;
}
const MembercardContent1: Array<MemberCardType> = [
    {
        className: "simonCard",
        image: DrSimon,
        name: "Dr Simon",
        role: "Founder / HOP / Artist"
    },
    {
        className: "zenCard",
        image: DrZen,
        name: "Dr Zen",
        role: "Founder / HOM / Web Designer"
    },
    {
        className: "crosmoCard",
        image: CrosmoDev,
        name: "CrosmoDev",
        role: "Tech Lead / Web3 Dev"
    }
]
const MembercardContent2: Array<MemberCardType> = [
    {
        className: "ninjaCard",
        image: NinjaDev,
        name: "Ninja Dev",
        role: "Web3 Dev"
    },
    {
        className: "atlasCard",
        image: AtlasDragon,
        name: "Atlas Dragon",
        role: "CM / Social Media Manager"
    },
    {
        className: "Cellar",
        image: CellarDweller,
        name: "Cellar Dweller",
        role: "Mod / Collab Manager"
    },

]
const MembercardContent_Oval: Array<MemberCardType> = [
    {
        className: "simonCard",
        image: oval_Dr_Simon,
        name: "Dr Simon",
        role: "Founder / HOP / Artist"
    },
    {
        className: "zenCard",
        image: oval_Dr_Zen,
        name: "Dr Zen",
        role: "Founder / HOM / Web Designer"
    },
    {
        className: "crosmoCard",
        image: oval_CrosmoDev,
        name: "CrosmoDev",
        role: "Tech Lead / Web3 Dev"
    },
    {
        className: "davidCard",
        image: oval_David_Tanaka,
        name: "David Tanaka",
        role: "Web3 Dev"
    },
    {
        className: "atlasCard",
        image: oval_Atlas_Dragon,
        name: "Atlas Dragon",
        role: "CM / Social Media Manager"
    },
    {
        className: "Cellar",
        image: oval_Cellar_Dweller,
        name: "Cellar Dweller",
        role: "Mod / Collab Manager"
    }
]
const StaticsCardConetent: Array<StaticCardTypes> = [
    {
        className: "SOLDistributed",
        title: "Total SOL Distributed",
        content: "174 SOL (11,000 USD)"
    },
    {
        className: "sDAODistributed",
        title: "Total sDAO Distributed",
        content: "30,000 sDAO (16,000 USD)"
    },
    {
        className: "sDAOBurned",
        title: "Total sDAO Burned",
        content: "30,000 sDAO (16,000 USD)"
    },
]
const UtilitiesCardContent: Array<UtilitiesCardTypes> = [
    {
        className: "governancecard",
        icon: GovernanceIcon,
        title: "Governance",
        content: "Use your Dao Power to influence future developments of the project with Dao Governance Tool."
    },
    {
        className: "passiveincomecard",
        icon: PassiveincomeIcon,
        title: "Passive Income",
        content: "We offer a vast earning opportunity for our investors, Staking, Sharing Royalties, Access to profitable Tools and much more."
    },
    {
        className: "daotoolscard",
        icon: DaotoolsIcon,
        title: "Dao Tools",
        content: "Dao Tools are products developed for the adoption of our Governance token.Learn more about."
    }
]

export const HomePage = () => {

    return (
        <div className="homepage">
            <section className="section1">
                <div className="textarea">
                    <h1>DaoLabs Ecosystem</h1>
                    <h5>DaoLabs is an Incubator project with the mission of connecting the Developers and Artists, creating and improving projects.</h5>
                    <div className="btns">
                        <button className="joinclub">Join the Club</button>
                        <button className="learnmore">Learn More</button>
                    </div>
                    <img className="glow" src={Glow} alt="" />
                </div>
            </section>
            <div className="border-bottom"></div>
            <section className="section2">
                <div>
                    <h2>DaoLabs Utilities</h2>
                </div>
                <div className="UtilitesCards">
                    {
                        UtilitiesCardContent.map((card) => (
                            <UtilitiesCard className={card.className} icon={card.icon} title={card.title} content={card.content} />
                        ))
                    }
                </div>
            </section>
            <div className="border-bottom"></div>
            <section className="section3">
                <div className="thirdContent">
                    <img className="Bots" src={Bots} alt="" />
                    <div className="slide">
                        <h2>Earn Daily Passive Incomes</h2>
                        <h5>Our services are designed to maximize revenue generation for our NFTs and Token Holders by providing a wide range of daily earning opportunities</h5>
                    </div>
                </div>
                <button className="learnmore">Learn More</button>
            </section>
            <section className="section4">
                <div>
                    <h2>Statistics</h2>
                </div>
                <div className="Staticscards">
                    {StaticsCardConetent.map((card) => (
                        <StaticsCard className={card.className} title={card.title} content={card.content} />
                    ))
                    }
                </div>
                <button className="joinclub">Join the Club</button>
            </section>
            <div className="border-bottom"></div>
            <section className="section4_2">
                <div className="textarea">
                    <h2>Earn Daily Passive Incomes</h2>
                    <h5>
                        Our services are designed to maximize revenue generation for our NFTs and Token Holders by providing a wide range of daily earning opportunities
                    </h5>
                </div>
                <button className="learnmore">Learn More</button>
                <img className="shape2" src={Shape2} alt="" />
            </section>
            <div className="border-bottom"></div>
            <section className="section5">
                <div className="DaoLabsTeamTitle">
                    <h2>DaoLabs Team</h2>
                </div>
                <div className="membercard">
                    <div className="membercard1">
                        {MembercardContent1.map((card) => (
                            <MemberCard className={card.className} image={card.image} name={card.name} role={card.role}></MemberCard>
                        ))
                        }
                    </div>
                    <div className="membercard2">
                        {MembercardContent2.map((card) => (
                            <MemberCard className={card.className} image={card.image} name={card.name} role={card.role}></MemberCard>
                        ))
                        }
                    </div>
                </div>
                <div className="joinMembercard">
                    {MembercardContent_Oval.map((card) => (
                        <MemberCard className={card.className} image={card.image} name={card.name} role={card.role}></MemberCard>
                    ))}
                </div>
                <div className="DaoLabsFrensTitle">
                    <h2>DaoLabs Frens</h2>
                </div>
                <div className="labsimages">
                    <img src={LabsLogo1} alt="" />
                    <img src={LabsLogo2} alt="" />
                    <img src={LabsLogo3} alt="" />
                    <img src={LabsLogo4} alt="" />
                    <img src={LabsLogo5} alt="" />
                </div>
            </section>
            <div className="border-bottom"></div>
            <section className="section6">
                <h2>DaoLabs Partners</h2>
                <div className="questionmark">
                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M80 40C80 50.6087 75.7857 60.7828 68.2843 68.2843C60.7828 75.7857 50.6087 80 40 80C29.3913 80 19.2172 75.7857 11.7157 68.2843C4.21427 60.7828 0 50.6087 0 40C0 29.3913 4.21427 19.2172 11.7157 11.7157C19.2172 4.21427 29.3913 0 40 0C50.6087 0 60.7828 4.21427 68.2843 11.7157C75.7857 19.2172 80 29.3913 80 40ZM40 25C39.1215 24.9991 38.2583 25.2298 37.4972 25.6687C36.7362 26.1075 36.1043 26.7392 35.665 27.5C35.3478 28.0894 34.9156 28.6091 34.3938 29.0283C33.8721 29.4475 33.2714 29.7577 32.6276 29.9405C31.9837 30.1233 31.3097 30.175 30.6455 30.0924C29.9813 30.0099 29.3405 29.7949 28.7609 29.4601C28.1814 29.1253 27.6749 28.6775 27.2717 28.1433C26.8684 27.6092 26.5764 26.9995 26.4131 26.3504C26.2499 25.7013 26.2185 25.0261 26.3211 24.3647C26.4236 23.7033 26.6579 23.0692 27.01 22.5C28.6611 19.6406 31.2095 17.4058 34.2601 16.1423C37.3107 14.8788 40.693 14.6572 43.8823 15.5118C47.0717 16.3664 49.89 18.2495 51.9001 20.869C53.9102 23.4885 54.9999 26.6981 55 30C55.0009 33.1031 54.0397 36.1301 52.2488 38.6643C50.4579 41.1984 47.9254 43.1149 45 44.15V45C45 46.3261 44.4732 47.5979 43.5355 48.5355C42.5979 49.4732 41.3261 50 40 50C38.6739 50 37.4021 49.4732 36.4645 48.5355C35.5268 47.5979 35 46.3261 35 45V40C35 38.6739 35.5268 37.4021 36.4645 36.4645C37.4021 35.5268 38.6739 35 40 35C41.3261 35 42.5979 34.4732 43.5355 33.5355C44.4732 32.5979 45 31.3261 45 30C45 28.6739 44.4732 27.4021 43.5355 26.4645C42.5979 25.5268 41.3261 25 40 25ZM40 65C41.3261 65 42.5979 64.4732 43.5355 63.5355C44.4732 62.5979 45 61.3261 45 60C45 58.6739 44.4732 57.4021 43.5355 56.4645C42.5979 55.5268 41.3261 55 40 55C38.6739 55 37.4021 55.5268 36.4645 56.4645C35.5268 57.4021 35 58.6739 35 60C35 61.3261 35.5268 62.5979 36.4645 63.5355C37.4021 64.4732 38.6739 65 40 65Z" fill="url(#paint0_linear_152_1633)" />
                        <defs>
                            <linearGradient id="paint0_linear_152_1633" x1="90.4" y1="-9.57727e-07" x2="5.07832e-06" y2="80" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#A2E6FB" />
                                <stop offset="0.989583" stop-color="#F1C9DE" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </section>
            <div className="border-bottom"></div>
        </div>
    )
}
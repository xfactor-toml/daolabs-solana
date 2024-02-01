import { Arrowicon, DaoLabslogo } from "../../../assets"

export const Footer = () => {
  return (
    <div className="footer">
      <div className="leftside">
        <div className="block1">
          <img className="footerlogo" src={DaoLabslogo} alt="" />
          <div className="textarea">
            <h5>
              DaoLabs is an Incubator project with the mission of connecting Developers and Artists,
              fostering collaboration, and facilitating the creation and enhancement of innovative
              projects that have a lasting impact on their respective companies.
            </h5>
          </div>
          <div>
            <button className="buildbtn">
              <div>
                <h5>Build with DaoLabs</h5>
                <img src={Arrowicon} className="arrowicon" alt="" />
              </div>
            </button>
          </div>
          <div className="copyright">
            <h5>© DaoLabs Ecosystem, 2023</h5>
          </div>
        </div>
      </div>
      <div className="list">
        <div>
          <ul className="website">
            <li><h5>Website</h5></li>
            <li>Home</li>
            <li>Staking</li>
            <li>Raffles Tool</li>
            <li>NFTs Swap Tool</li>
            <li>Smart Trade Tool</li>
          </ul>
        </div>
        <div>
          <ul className="doresearch">
            <li><h5>Do Your Own Research</h5></li>
            <li>X</li>
            <li>Discord</li>
            <li>Gitbook</li>
            <li>Medium</li>
            <li>DaoLabs on Cronos Blockchain</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
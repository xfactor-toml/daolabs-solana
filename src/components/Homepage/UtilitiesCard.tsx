import React from "react";
import { Arrowicon } from "../../assets";
import type { UtilitiesCardTypes } from "../../pages/Hompage/Hompage";

// type ButtonBaseType = React.PropsWithChildren<React.ButtonHTMLAttributes<HTMLButtonElement>>;

// type ButtonCustomType = {
//   icon?: JSX.Element;
//   varient?: 'small' | "medium";
//   color?: "primary" | "successed";
// }

// type ButtonType = ButtonBaseType & ButtonCustomType;

export const UtilitiesCard: React.FC<UtilitiesCardTypes> = ({ className, icon, title, content }) => {

  return (
    <div className="utilitiescard">
      <div>
        <img className="cardicon" src={`${icon}`} alt="" />
      </div>
      <div>
        <h3 className="cardtitle">{title}</h3>
      </div>
      <div>
        <h5 className="cardcontent">{content}</h5>
      </div>
      <div>
        <button className="contactbtn">
          <div >
            <h5 className="contactbtnletter">Contact Us</h5>
            <img className="contactbtnimg" src={Arrowicon} alt="" />
          </div>
        </button>
      </div>
    </div>
  );
}
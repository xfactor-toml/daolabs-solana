import React from "react";
import type { MemberCardType } from "../../pages/Hompage/Hompage";
import "../../index.css"

export const MemberCard: React.FC<MemberCardType> = ({ className, image, name, role }) => {

  return (
    <div className="Membercard">
      <img src={`${image}`} alt="" />
      <h4>{name}</h4>
      <h5>{role}</h5>
    </div>
  );
}
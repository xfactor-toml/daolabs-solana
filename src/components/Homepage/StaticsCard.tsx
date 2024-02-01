import React from "react";
import type { StaticCardTypes } from "../../pages/Hompage/Hompage";

export const StaticsCard: React.FC<StaticCardTypes> = ({ className, title, content }) => {

  return (
    <div className="staticscard">
      <h4>{title}</h4>
      <h5>{content}</h5>
    </div>
  );
}
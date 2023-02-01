import React from "react";
import Card from "../card";

export interface User {
  uuid: string;
  fullName: string;
  address: string;
  phoneNumber: string;
  email: string;
  city: string;
  country: string;
}

export interface GridProps {
  data: Array<User>;
}

export const Grid: React.FC<GridProps> = ({ data }: GridProps) => {
  return (
    <div className="card-grid grid-column">
      {data.map((eachUser) => {
        return <Card user={eachUser} key={`${eachUser.uuid}`} />;
      })}
    </div>
  );
};

export default Grid;

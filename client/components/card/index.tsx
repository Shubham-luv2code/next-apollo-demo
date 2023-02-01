import React from "react";
import { User } from "../grid/index";

export interface CardProps {
  user: User;
}
export interface CardHocProps {
  children: React.ReactElement;
}
export const CardHoc: React.FC<CardHocProps> = ({ children }: CardHocProps) => {
  return <div className="card-body"> {children}</div>;
};
export const Card: React.FC<CardProps> = ({ user }: CardProps) => {
  const { fullName, address, city, country, phoneNumber, email } = user;
  return (
    <div className="card grid-column">
      <CardHoc>
        <div className="user-name">{fullName}</div>
      </CardHoc>
      <CardHoc>
        <div>{`${address}, ${city}, ${country}`}</div>
      </CardHoc>
      <CardHoc>
        <div>{phoneNumber}</div>
      </CardHoc>
      <CardHoc>
        <a>{email}</a>
      </CardHoc>
    </div>
  );
};

export default Card;

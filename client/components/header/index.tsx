import React from "react";
export interface HeaderProps {
  text: string;
}
export const Header: React.FC<HeaderProps> = ({ text }: HeaderProps) => {
  return <div className="header">{text}</div>;
};

export default Header;

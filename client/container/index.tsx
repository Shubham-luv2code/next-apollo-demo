import React from "react";
import Header from "../components/header";
export interface ContainerProps {
  children: React.ReactNode;
}
export const Container: React.FC<ContainerProps> = ({
  children,
}: ContainerProps) => {
  return (
    <div className="container">
      <Header text="User Details (Infinite Scroll)" />
      {children}
    </div>
  );
};

export default Container;

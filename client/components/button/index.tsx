import React, { useRef, useEffect } from "react";

export interface ButtonProps {
  text: string;
  handleClick: () => void;
  /**
   * Optional attribute to disable button if no more data is returned from query, default value is true
   **/
  hasMore?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  handleClick,
  hasMore,
}: ButtonProps) => {
  const buttonRef = useRef(null);

  const scrollToBottom = () => {
    buttonRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [handleClick]);

  return (
    <button
      onClick={handleClick}
      disabled={!hasMore}
      className="btn"
      ref={buttonRef}
    >
      {text}
    </button>
  );
};

export default Button;

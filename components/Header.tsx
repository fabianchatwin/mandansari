import React, { useEffect } from "react";

export default function Header() {
  useEffect(() => {
    const textElement = document.querySelector(".headertext") as HTMLElement;
    if (textElement) {
      textElement.style.opacity = "1";
    }
    const imageElement = document.querySelector(".header") as HTMLElement;
    if (imageElement) {
     imageElement.style.opacity = "1";
    }

  }, []);

  return (
    <div className="header">
      <div className="headertext">The best lessons start here</div>
    </div>
  );
}

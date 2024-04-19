import Link from "next/link";
import React, { useEffect } from "react";

export default function Success() {
  useEffect(() => {
    const imageElement = document.querySelector(".bg-1") as HTMLElement;
    if (imageElement) {
      imageElement.style.opacity = "1";
    }
    const titleElement = document.querySelector(".title") as HTMLElement;
    if (titleElement) {
      titleElement.style.opacity = "1";
    }
  }, []);

  return (
    <div className="wrapper">
      <div className="fixed-bg bg-8">
        <h1>
          Submission Received!
          <p>
            Thank you!
            <p>
              <Link href="/">
                <a>home page</a>
              </Link>
              .
            </p>
          </p>
        </h1>
      </div>
    </div>
  );
}

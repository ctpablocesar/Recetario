import React, { useEffect } from "react";
import { images } from "../../Resources/resources";
import { gsap } from "gsap";

export const Header = ({ titulo }) => {
  useEffect(() => {
    const titulo = document.querySelector(".Titulo");

    gsap.from(titulo, {
      opacity: 0,
      y: 100,
      duration: 2,
    });
  }, []);

  return (
    <div></div>
  );
};

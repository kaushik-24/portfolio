'use client'
import { ReactTyped } from "react-typed"
import { useMemo } from "react";

const Type = () => {
 const typedStrings = useMemo(() => ["Kaushik Gurung.", "Front-End Developer."], []);
  return (
  <ReactTyped
      strings={typedStrings}
      typeSpeed={40}
      backSpeed={50}
      loop
  />
  )
}

export default Type

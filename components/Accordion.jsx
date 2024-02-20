"use client";

import { useState } from "react";
import AccordionItem from "./AccordionItem";

export default function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(0);

  return (
    <div className="accordion grid gap-y-6">
      {data.map((el, idx) => (
        <AccordionItem
          key={idx}
          curOpen={curOpen}
          onOpen={setCurOpen}
          title={el.title}
          num={idx}
        >
          {el.text}
        </AccordionItem>
      ))}
    </div>
  );
}

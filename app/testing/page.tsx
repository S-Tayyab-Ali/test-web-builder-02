"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Testing() {
  const [text, setText] = useState("This is the testing page");

  const handleClick = () => {
    setText("I was clicked");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 text-center">
      <h1 className="text-4xl font-bold mb-8">{text}</h1>
      <Button onClick={handleClick}>Click me</Button>
    </main>
  );
}



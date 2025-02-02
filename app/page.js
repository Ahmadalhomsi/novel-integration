"use client"

import NovelEditor from "@/component/editor";
import React, { useState } from "react";


export default function App() {
  const [content, setContent] = useState();

  return (
    <div className="">
      <NovelEditor
        content={content}
        setContent={setContent}
      />
    </div>
  );
}
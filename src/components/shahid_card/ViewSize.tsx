"use client";

import { useState } from "react";

type viewSizeType = "small" | "big";

const ViewSize = () => {
  const [viewSize, setViewSize] = useState<viewSizeType>();

  return (
    <>
      {viewSize === "big" ? (
        <button className="btn_l" onClick={() => setViewSize("small")}>
          View Small
        </button>
      ) : (
        <button className="btn_l" onClick={() => setViewSize("big")}>
          View Big
        </button>
      )}
    </>
  );
};

export default ViewSize;

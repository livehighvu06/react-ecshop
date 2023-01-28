import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

function Loading() {
  return (
    <div className="text-[90px] flex justify-center items-center animate-spin">
      <AiOutlineLoading3Quarters />
    </div>
  );
}

export default Loading;

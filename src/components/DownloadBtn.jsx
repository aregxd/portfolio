import React from "react";

const DownloadBtn = ({ title }) => {
  return (
    <div className="flex ">
      <DrawOutlineButton>{title}</DrawOutlineButton>
    </div>
  );
};

const DrawOutlineButton = ({ children, ...rest }) => {
  return (
    <button
      {...rest}
      className="group flex justify-center items-center gap-2 relative px-6 py-4 font-medium text-[#fff] bg-gray-900/50 transition-colors duration-[400ms] hover:text-[#8dd8f8]"
    >
      <span>{children}</span>

      {/* TOP */}
      <span className="absolute left-0 top-0 h-[2px] w-0 bg-[#50c4f6] transition-all duration-100 group-hover:w-full" />

      {/* RIGHT */}
      <span className="absolute right-0 top-0 h-0 w-[2px] bg-[#50c4f6] transition-all delay-100 duration-100 group-hover:h-full" />

      {/* BOTTOM */}
      <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-[#50c4f6] transition-all delay-200 duration-100 group-hover:w-full" />

      {/* LEFT */}
      <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-[#50c4f6] transition-all delay-300 duration-100 group-hover:h-full" />
    </button>
  );
};

export default DownloadBtn;

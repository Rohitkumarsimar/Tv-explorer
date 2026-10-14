import React from "react";

const MobileNavLinks = ({ isOpen }) => {
  return (
    
      <div
        className={`md:hidden absolute p-2 overflow-hidden transition-all ease-in-out duration-200 h-dvh w-full bg-black text-yellow-500 *:rounded-2xl *:focus:bg-gray-800 *:p-2 *:space-y-4 ${isOpen?'max-h-96 opacity-100':'max-h-0 opacity-0'}`}
      >
        <div>This is a link</div>
        <div>This is a link</div>

        <div>This is a link</div>

        <div>This is a link</div>

        <div>This is a link</div>
      </div>
  );
};

export default MobileNavLinks;

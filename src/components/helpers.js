export const DropdownContainer = ({ children, extraStyles = "" }) => {
  return (
    <div
      className={`absolute min-w-max top-[120%] right-0 border border-[#BBBBBB] bg-white/75 backdrop:blur-[1px] backdrop:saturate-150 shadow-sm px-2 rounded-md ${extraStyles}`}
    >
      {children}
    </div>
  );
};

import React from "react";

// Define prop types to extend all native button attributes
interface AppButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  main?: boolean;
  outline?: boolean;
  white?: boolean;
}

const AppButton: React.FC<AppButtonProps> = ({
  children,
  className = "",
  main,
  outline,
  white,
  ...rest // Use rest to collect all other props
}) => {
  return (
    <button
      {...rest} // Spread the rest of the props here
      className={`${className}  ${
        outline &&
        "text-mainBlue outline outline-2 outline-mainBlue hover:text-gray hover:outline-gray"
      } ${
        white &&
        "text-white outline outline-2 outline-white hover:outline-gray hover:text-gray"
      } ${
        white || outline
          ? ""
          : "bg-gradient-to-r from-mainBlue to-lightBlue hover:from-gray hover:to-gray"
      }  rounded-3xl text-center font-body text-xs lg:text-base text-white `}
    >
      {children}
    </button>
  );
};

export default AppButton;

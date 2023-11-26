import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";

interface AppInputProps {
  className?: string;
  style?: React.CSSProperties;
  type: string;
  placeholder: string;
  label?: string;
  showPassword?: boolean;
}

export default function AppInput({
  type,
  placeholder,
  label = "",
}: AppInputProps) {
  const [show, setShow] = useState(false);
  const togglePasswordVisibility = () => {
    setShow(!show);
  };

  return (
    <div className="mb-4">
      <label
        htmlFor={type}
        className="font-body md:text-lg font-medium text-dark"
      >
        {label}
      </label>

      <div className="relative shadow-lg">
        <input
          type={type === "password" && show ? "text" : type}
          id={type}
          className="bg-light placeholder:text-gray font-body font-light focus:outline focus:outline-1 focus:outline-mainBlue text-mainBlue text-sm md:text-base rounded-lg focus:ring-mainBlue focus:border-mainBlue block w-full pl-4 p-3 pr-10"
          placeholder={placeholder}
          required
        />
        {type === "password" && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
            {show ? (
              <FaEyeSlash
                className="h-5 w-5 text-gray cursor-pointer"
                onClick={togglePasswordVisibility}
              />
            ) : (
              <FaEye
                className="h-5 w-5 text-gray cursor-pointer"
                onClick={togglePasswordVisibility}
              />
            )}
          </div>
        )}
        {type === "search" && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
            <IoMdSearch className="h-5 w-5 text-gray cursor-pointer" />
          </div>
        )}
      </div>
    </div>
  );
}

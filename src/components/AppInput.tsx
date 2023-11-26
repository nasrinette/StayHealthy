interface AppInputProps {
  className?: string;
  style?: React.CSSProperties;
  type: string;
  placeholder: string;
  label?: string;
}
export default function AppInput({
  type,
  placeholder,
  label = "",
}: AppInputProps) {
  return (
    <div className="mb-4">
      <label
        htmlFor={type}
        className="font-body md:text-lg font-medium text-dark"
      >
        {label}
      </label>
      <input
        type={type}
        id={type}
        className="bg-light focus:outline focus:outline-2 focus:outline-mainBlue border border-lightBlue text-mainBlue text-sm md:text-base rounded-lg focus:ring-mainBlue focus:border-mainBlue block w-full pl-4 p-2.5"
        placeholder={placeholder}
        required
      />
    </div>
  );
}

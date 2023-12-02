interface ErrorProps {
  children: React.ReactNode;
}
export default function Error({ children }: ErrorProps) {
  return <p className=" font-normal text-base text-[#ff002b]">{children}</p>;
}

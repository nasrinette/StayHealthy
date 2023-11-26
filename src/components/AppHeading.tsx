interface HeadingProps {
  children: React.ReactNode;
  className?: string;
}
export default function AppHeading({ children, className }: HeadingProps) {
  return (
    <h1
      className={`md:text-4xl text-3xl font-title font-bold  mb-4 md:mb-8  ${className}`}
    >
      {children}
    </h1>
  );
}

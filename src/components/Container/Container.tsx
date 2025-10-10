export default function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto w-full max-w-screen-sm px-5 md:max-w-3xl xl:max-w-6xl ${className}`}
    >
      {children}
    </div>
  );
}
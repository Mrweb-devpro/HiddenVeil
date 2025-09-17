export default function Section({
  children,
  className,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      className={
        "flex flex-col items-center gap-8 text-xs md:text-[1rem]" +
        " " +
        className
      }
    >
      {children}
    </section>
  );
}

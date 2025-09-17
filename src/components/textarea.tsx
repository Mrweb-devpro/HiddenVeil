export default function Textarea({
  children,
  placeholder,
  name,
  value,
  className,
  disabled = false,
}: {
  children: React.ReactNode;
  placeholder: string;
  name: string;
  className?: string;
  disabled?: boolean;
  value?: string;
}) {
  const valueObj: { value?: string; defaultValue?: string } = {};
  if (value && !disabled) valueObj.value = value;
  else valueObj.defaultValue = value;

  return (
    <div className="w-full relative">
      <textarea
        name={name}
        disabled={disabled}
        {...valueObj}
        required
        className={
          "resize-none bg-[#ffffff60] rounded-3xl w-full p-6 min-h-40 max-h-60 text-sm md:text-lg font-medium focus:outline-[var(--accent)] focus:outline-2 outline-offset-4" +
          " " +
          className
        }
        placeholder={placeholder}
      ></textarea>
      {children}
    </div>
  );
}

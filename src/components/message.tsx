export default function Message({
  message,
  time,
}: {
  message: string;
  time: string;
}) {
  return (
    <blockquote className="flex flex-col justify-between gap-4 bg-stone-100 p-4 rounded-2xl w-full h-44 shadow ">
      <p className="text-sm md:text-lg font-semibold">{message}</p>

      <p className=" self-end text-stone-400">{time}</p>
    </blockquote>
  );
}

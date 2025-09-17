import Image from "next/image";

export default function UserDetails({
  image,
  title,
}: {
  image?: string;
  title?: string;
}) {
  return (
    <div className="rounded-3xl w-max max-w-screen px-7 py-5 bg-stone-100 flex items-center gap-4">
      {image && (
        <Image
          src={image}
          alt="user image"
          width="45"
          height="45"
          className="md:w-11 md:h-11 w-8 h-8 rounded-4xl"
        />
      )}
      {title && <p className="font-bold">{title}</p>}
    </div>
  );
}

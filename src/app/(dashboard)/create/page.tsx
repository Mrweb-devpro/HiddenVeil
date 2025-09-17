import UserDetails from "@/components/details";
import LinkTextarea from "@/components/linkTextarea";
import Logo from "@/components/logo";
import Section from "@/components/Section";
import ShareButton from "@/components/shareButton";
import Terms from "@/components/terms";
import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";

export default async function CreatePage() {
  const currentUserObj = await currentUser();
  return (
    <Section>
      <Logo />

      <UserDetails image={currentUserObj?.imageUrl || "/assets/user.png"} />

      <LinkTextarea username={currentUserObj?.username} />

      <p className="text-xs md:text-lg font-semibold text-stone-700">
        👇 400 friends just tapped the button
      </p>

      <div className="flex gap-4 items-center">
        <ShareButton username={currentUserObj?.username} />
        <Link
          href="/messages"
          className="font-semibold bg-stone-900 text-stone-100 py-4 px-8 rounded-3xl"
        >
          ✉️ View messages
        </Link>
      </div>

      <Terms />
    </Section>
  );
}

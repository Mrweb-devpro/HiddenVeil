import UserDetails from "@/components/details";
import Logo from "@/components/logo";
import Section from "@/components/Section";
import Terms from "@/components/terms";
import Link from "next/link";

export default async function SentMessagePage({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = await params;
  return (
    <Section>
      <Logo />
      <UserDetails
        title="✅ Your message has been sent"
        image="/assets/user.png"
      />
      <Link
        href={`/send/${username}`}
        className="font-semibold bg-stone-600 text-stone-100 py-4 px-8 rounded-3xl"
      >
        📤 Send another message
      </Link>

      <div className="flex flex-col items-center gap-2">
        <p className="text-xs md:text-lg font-semibold text-stone-700">
          What are you waiting for ?
        </p>
        <Link
          href="/create"
          className="font-semibold bg-stone-900 text-stone-100 py-4 px-8 rounded-3xl"
        >
          💌 Create your&apos;s now
        </Link>
      </div>

      <p className="text-sm md:text-lg font-semibold text-stone-700">
        👇 over 1M+ users are using this app
      </p>

      <Terms />
    </Section>
  );
}

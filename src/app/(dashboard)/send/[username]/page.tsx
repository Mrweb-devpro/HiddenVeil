import UserDetails from "@/components/details";
import Logo from "@/components/logo";
import Terms from "@/components/terms";
import Textarea from "@/components/textarea";

export default async function AnonynmousMessagePage({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = await params;

  return (
    <form
      action=""
      className="flex flex-col items-center gap-8 text-xs md:text-[1rem]"
    >
      <Logo />

      <UserDetails
        title={`📩 Send anonynmous messsage to @${username}`}
        image="/assets/user.png"
      />
      {/*  */}
      <div className="flex flex-col w-11/12 md:w-xl items-center">
        <Textarea
          name="message"
          className="resize-y"
          placeholder="What have you been up to lately?"
        >
          <button
            type="button"
            className="absolute hover:bg-[var(--accent)] hover:text-stone-100 flex items-center gap-2 text-xs text-stone-600 bottom-4 right-4 bg-[#00000020] group p-2 rounded-3xl"
          >
            <span className="not-md:hidden">Generate Random message</span>
            <span>🎲</span>
          </button>
        </Textarea>

        <label
          htmlFor="image"
          className="px-4 py-2 rounded-b-2xl bg-[var(--accent)] w-fit text-stone-100 font-semibold"
        >
          📷 Attach an image
          <input type="file" id="image" hidden={true} />
        </label>
      </div>

      <p className="text-xs md:text-lg font-semibold text-stone-700">
        👇 400 friends just tapped the button
      </p>

      <button
        type="submit"
        className="font-semibold bg-stone-900 text-stone-100 py-4 px-8 rounded-3xl"
      >
        📨 Send
      </button>
      <Terms />
    </form>
  );
}

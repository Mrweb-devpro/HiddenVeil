import UserDetails from "@/components/details";
import Logo from "@/components/logo";
import Message from "@/components/message";
import Section from "@/components/Section";
import Terms from "@/components/terms";

export default function Messages() {
  return (
    <Section>
      <Logo />
      <UserDetails image="/assets/user.png" title="Your messages 1" />

      <article className="w-11/12  md:w-xl flex flex-col gap-4">
        <Message
          message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae animi reprehenderit modi minus doloremque numquam dolorum totam voluptatum, alias officia."
          time="20200911"
        />
        <Message message="Hello" time="20200911" />

        <Message
          message=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae animi reprehenderit modi minus doloremque numquam dolorum totam voluptatum, alias officia."
          time="20200911"
        />
      </article>

      <Terms />
    </Section>
  );
}

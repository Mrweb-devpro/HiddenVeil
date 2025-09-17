"use client";
import { useState } from "react";
import Textarea from "./textarea";

export default function LinkTextarea({
  username,
}: {
  username: string | null | undefined;
}) {
  const baseURL = window.location.origin;
  const sendMessagesURL = `${baseURL}/send/${username}`;
  const [copySuccess, SetCopySuccess] = useState("");

  // handle the copy URL button
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(sendMessagesURL);
      SetCopySuccess("Copied!🙂");
      const timeoutID = setTimeout(() => {
        SetCopySuccess("");
        return clearTimeout(timeoutID);
      }, 2000);
    } catch (error) {
      SetCopySuccess("Failed to copy❌");
      console.error("Failed to copy link:", error);
    }
  };

  return (
    <Textarea
      name="link"
      placeholder="loading link .... "
      value={sendMessagesURL}
      disabled={true}
    >
      <button
        type="button"
        onClick={handleCopy}
        disabled={copySuccess !== ""}
        className={`absolute hover:bg-[var(--accent)] hover:text-stone-100 flex items-center gap-2 text-xs text-stone-600 bottom-4 right-4 bg-[#00000020] group p-2 rounded-3xl
          ${
            !copySuccess || " !text-stone-100 bg-green-600 hover:bg-green-700"
          }`}
      >
        <p className="font-semibold">{copySuccess || "🖇️copy link"}</p>
      </button>
    </Textarea>
  );
}

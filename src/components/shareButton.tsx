"use client";
export default function ShareButton({
  username,
}: {
  username: string | null | undefined;
}) {
  const baseURL = window.location.origin;
  const sendMessagesURL = `${baseURL}/send/${username}`;

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "🤭Send me an anonymous message",
          text: "Click to send an anonymous message",
          url: sendMessagesURL,
        });

        console.log("content shared!!");
      } catch (error) {
        console.log("Error sharing content:", error);
      }
    } else {
      alert("Sharing of links is not supported on this browser");
    }
  };

  return (
    <button
      type="submit"
      onClick={handleShare}
      className="font-semibold bg-stone-600 text-stone-100 py-4 px-8 rounded-3xl"
    >
      🔗 Share
    </button>
  );
}

import Image from "next/image";

export default function ShareButton() {
  return (
    <div
      onClick={() => {
        console.log("Share button clicked");
      }}
      className="flex items-center justify-center gap-1 px-4 py-2 rounded cursor-pointer"
    >
      <Image
        src="/whatsapp.png"
        alt="Share"
        width={20}
        height={20}
        className="mr-2"
      />
      Share
    </div>
  );
}

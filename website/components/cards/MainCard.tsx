"use client";

import { useRouter } from "next/navigation";

export default function MainCard({
  name,
  children,
  url,
  index,
}: {
  name: string;
  children: React.ReactNode;
  url: string;
  index: number;
}) {
  const navigation = useRouter();

  return (
    <div className="flex gap-4 w-full bg-white rounded-xl shadow-md">
      <div>
        {children}
        <div>
          <div
            onClick={() => {
              navigation.push(url);
            }}
          ></div>
        </div>
      </div>
      <div className="text-3xl font-bold">{name}</div>
    </div>
  );
}

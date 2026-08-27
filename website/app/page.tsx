"use client";

import { useEffect, useState } from "react";
import TcModal from "../components/modals/TcModal";

export default function Home() {

  const [isShow, setIsShow] = useState(false);
  
  useEffect(() => {
    const isTncAccessed = localStorage.getItem("isTncAccessed");
    if (!Boolean(isTncAccessed)) {
      setIsShow(true);
    }
  }, [])

  return <div>
    <p>Home page</p>
    {isShow && <TcModal setIsshow={setIsShow} />}
  </div>;
}

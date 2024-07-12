"use client";
import dynamic from "next/dynamic";

const Shop = dynamic(() => import("../components/organisms/Shop"), {
  ssr: false,
});

export default function page() {
  return <Shop />;
}

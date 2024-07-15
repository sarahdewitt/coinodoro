"use client";
import React from 'react'
import dynamic from "next/dynamic";

const Settings = dynamic(() => import("../components/organisms/Settings"), {
  ssr: false,
});

export default function page() {
  return (
    <Settings/>
  )
}

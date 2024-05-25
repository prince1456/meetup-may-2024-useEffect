'use client'
import { useEffect, useState } from "react";
import  ComponentWillUnmountExample from '@/components/componentWillUnmount'
import ComponentDidMountExample from "@/components/componentDidMount";
import CounterComponent from '@/components/Counter'

export default function Home() {
  console.log("Home Component executed")
  useEffect(() => {
    console.log("Home Component useEffect executed")
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center">
        <h1 className="text-4xl font-bold">React UseEffect Hook</h1>
      {/* <ComponentWillUnmountExample /> */}
      {/* <ComponentDidMountExample /> */}
      <CounterComponent />
    </main>
  );
}

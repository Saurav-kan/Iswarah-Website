import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { useEffect, useState } from "react";
import { GetStaticProps } from "next";

export default function Home() {
  // const getProudcts = async () => {
  //   const res = await fetch("http://localhost:3000/api/products");
  // }
  return (
    <>
      <h1 className="p-8">Home List:</h1>
      <p>This is the Home page</p>
    </>
  );
}


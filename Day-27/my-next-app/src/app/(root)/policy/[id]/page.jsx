"use client";

import { usePathname } from 'next/navigation';
import React from 'react';

const Page = ({ params }) => {
  const pathName = usePathname();

  if (pathName === "/policy/3") {
    throw new Error("Error Has Occurred");
  }

  const { id } = params;

  return (
    <>
      <h1>ID : {id}</h1>
    </>
  );
};

export default Page;

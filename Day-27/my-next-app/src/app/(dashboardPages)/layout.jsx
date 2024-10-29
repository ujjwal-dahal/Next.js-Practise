"use client"

import { usePathname } from "next/navigation"


export default function DashboardLayout({children}){

  let path = usePathname();

  return <>
  {
    path !="/author" && <header>Header</header>
  }
  {children}
  <footer>Footer</footer>

  </>
}
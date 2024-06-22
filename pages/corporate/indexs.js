// 'use client'
import Head from "next/head"
import { useRouter, } from "next/router"
import { useLayoutEffect } from "react"
import { redirect } from 'next/navigation'
import { NextResponse } from "next/server"
import { navigate } from "../../actions"



export default function Corporate() {
    // return NextResponse.redirect(new URL('/'))
    // const router = useRouter()
    // router.push("/")
    // navigate();
    // redirect("/corporate/about-us")
    return (
        <Head>
            <title>CORPORATE - Faith Link Systems Limited</title>
            <meta name="description" content="CORPORATE" />
        </Head>

    )
}

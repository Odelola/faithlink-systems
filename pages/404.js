import { useRouter } from "next/router"

export default function Custom404() {
  const router = useRouter();
  console.log(router)
  router.asPath == "/corporate" && router.replace("/corporate/about-us")
  return <h1>404 - Page Not Found</h1>
}
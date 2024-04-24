import Link from "next/link"

export function PrimaryButton({ href, className="", buttonText = "SHOW MORE" }) {
    return (
        <Link href={href} className={`button after:absolute after:content-[''] after:w-full after:h-0 after:left-0 after:bottom-0 after:hover:top-0 after:-z-10 after:bg-white after:hover:h-full after:transition-all  ${className}`}>
            {buttonText}
        </Link>
    )
}

export function SecondaryButton({ href, className="", buttonText = "SHOW MORE" }) {
    return (
        <Link href={href} className={`button-secondary after:absolute after:content-[''] after:w-full after:h-0 after:left-0 after:bottom-0 after:hover:top-0 after:-z-10 after:bg-secondary after:hover:h-full after:transition-all  ${className}`}>
            {buttonText}
        </Link>
    )
}

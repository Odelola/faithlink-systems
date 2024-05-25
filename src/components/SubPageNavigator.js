import Link from "next/link"
import { getRoute } from './utils'
import { useRouter } from 'next/router'


function SubPageNavigator({ leftLink, rightLink }) {
    const router = useRouter();
    const { pathname } = router;
    const linkStyles = "hover:bg-primary hover:text-white flex justify-center items-center basis-1/2  text-[16px] gap-x-4 group max-md:text-[8px]"
    const getTheLink = link => getRoute[link] == pathname ? "javascript:;" : getRoute[link]
    return (
        <div className="flex border border-[#ccdbe7] mt-20 h-[50px]">
            <Link className={[linkStyles + " border-r border-[#ccdbe7]"]} href={getTheLink(leftLink)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="9" viewBox="0 0 12 9" fill="none">
                    <path className="group-hover:fill-white" d="M0.283755 5.1291L4.23392 8.72599C4.41369 8.89807 4.66182 8.9968 4.9226 8.99992C5.18316 9.00304 5.43429 8.91017 5.61856 8.74238C5.80305 8.57458 5.90526 8.3461 5.90205 8.10885C5.89884 7.87159 5.79063 7.64526 5.60185 7.48156L3.26689 5.35855L11.0329 5.35855C11.3783 5.35855 11.6978 5.19056 11.8705 4.91819C12.0432 4.64581 12.0432 4.31002 11.8705 4.03765C11.6978 3.76527 11.3785 3.59728 11.0329 3.59728L3.28854 3.59728L5.60185 1.48734C5.83605 1.26316 5.92369 0.943371 5.83284 0.64524C5.74199 0.34711 5.48614 0.114341 5.15852 0.0318092C4.8311 -0.0505282 4.48012 0.0294679 4.23392 0.24292L0.283755 3.8398C0.101621 4.00467 -0.000160754 4.22886 0.000482002 4.4626C-0.000160775 4.47001 -0.000160776 4.47723 0.000482 4.48445C-0.000160777 4.49167 -0.000160777 4.49909 0.000481998 4.50631C0.000481978 4.73985 0.102477 4.96384 0.283755 5.1291Z" fill="#0C1622"></path>
                </svg>
                <span>{leftLink.toUpperCase()}</span>

            </Link>
            <Link className={linkStyles} href={getTheLink(rightLink)}>
                <span>{rightLink.toUpperCase()}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="9" viewBox="0 0 12 9" fill="none" className="rotate-180">
                    <path className="group-hover:fill-white" d="M0.283755 5.1291L4.23392 8.72599C4.41369 8.89807 4.66182 8.9968 4.9226 8.99992C5.18316 9.00304 5.43429 8.91017 5.61856 8.74238C5.80305 8.57458 5.90526 8.3461 5.90205 8.10885C5.89884 7.87159 5.79063 7.64526 5.60185 7.48156L3.26689 5.35855L11.0329 5.35855C11.3783 5.35855 11.6978 5.19056 11.8705 4.91819C12.0432 4.64581 12.0432 4.31002 11.8705 4.03765C11.6978 3.76527 11.3785 3.59728 11.0329 3.59728L3.28854 3.59728L5.60185 1.48734C5.83605 1.26316 5.92369 0.943371 5.83284 0.64524C5.74199 0.34711 5.48614 0.114341 5.15852 0.0318092C4.8311 -0.0505282 4.48012 0.0294679 4.23392 0.24292L0.283755 3.8398C0.101621 4.00467 -0.000160754 4.22886 0.000482002 4.4626C-0.000160775 4.47001 -0.000160776 4.47723 0.000482 4.48445C-0.000160777 4.49167 -0.000160777 4.49909 0.000481998 4.50631C0.000481978 4.73985 0.102477 4.96384 0.283755 5.1291Z" fill="#0C1622"></path>
                </svg>
            </Link>
        </div>
    )
}

export default SubPageNavigator
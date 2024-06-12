import { useRouter } from 'next/router'
import Link from 'next/link'
import { getRoute } from './utils'

function Breadcrumb({ leadingRoutes = ["homepage"] }) {
    const router = useRouter()
    console.log(router)
    const nameOfRoute = Object.keys(router.query).length !== 0 ?  router.query.slug.split("-").join(" ").toUpperCase() : router.pathname.split("/").at(-1).toUpperCase();
    function GeneratePath({ leadingRoutes }) {
        return (
            leadingRoutes.map((item, index) => {
                console.log(leadingRoutes[1])
                return (
                    <li itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem" className='list-item' key={item}>
                        <Link itemScope="" itemType="http://schema.org/Thing" itemProp="item" href={(index == 1) ? "#" : getRoute[item] }>
                            <span itemProp="name" className='text-white leading-3'>{item.toUpperCase()}</span>
                        </Link>
                        <meta itemProp="position" content="1" />
                        <svg xmlns="http://www.w3.org/2000/svg" width="4" height="7" viewBox="0 0 4 7" fill="none" className='inline-flex mx-[10px]'>
                            <path d="M3.99698 3.43828C3.98294 3.30047 3.92386 3.17016 3.8279 3.06532L1.26497 0.248362C1.20509 0.178767 1.13102 0.12118 1.04713 0.0789985C0.963239 0.036817 0.871227 0.0108962 0.776527 0.00276658C0.681827 -0.00536302 0.586358 0.00446365 0.495756 0.0316658C0.405153 0.0588674 0.321253 0.102894 0.249008 0.161146C0.176763 0.219398 0.117637 0.290695 0.0751212 0.370828C0.0326049 0.450962 0.00755957 0.538308 0.00146395 0.62771C-0.00463168 0.717113 0.00834587 0.80676 0.0396303 0.891359C0.0709147 0.975959 0.119872 1.0538 0.183613 1.12028L2.35066 3.50104L0.183613 5.88204C0.120391 5.94859 0.0719165 6.02638 0.0410346 6.11082C0.0101527 6.19527 -0.00251485 6.28468 0.00377532 6.3738C0.0100655 6.46292 0.0351869 6.54996 0.077665 6.62981C0.120143 6.70966 0.179122 6.78071 0.251142 6.83879C0.323161 6.89688 0.40677 6.94083 0.497062 6.96806C0.587354 6.9953 0.68251 7.00526 0.776946 6.99738C0.871383 6.9895 0.963198 6.96393 1.047 6.92217C1.13081 6.88041 1.20491 6.8233 1.26497 6.75419L3.8279 3.93723C3.89017 3.869 3.93723 3.78967 3.96628 3.70395C3.99532 3.61823 4.00577 3.52788 3.99698 3.43828Z" fill="white"></path>
                        </svg>
                    </li>
                )
            })
        )
    }
    return (
        <ol className="absolute flex items-center bg-secondary h-[50px] pl-10 pr-[15px] max-md:px-2 md:min-w-[600px] bottom-[-25px] m-0 max-md:w-full max-md:left-0" itemScope itemType="http://schema.org/BreadcrumbList">
            {/* <li itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem" className='list-item'>
                <a itemScope="" itemType="http://schema.org/Thing" itemProp="item" href="/en">
                    <span itemProp="name" className='text-white leading-3 text-[10px]'>HOMEPAGE</span>
                </a>
                <meta itemProp="position" content="1" />
                <svg xmlns="http://www.w3.org/2000/svg" width="4" height="7" viewBox="0 0 4 7" fill="none" className='inline-flex mx-[10px]'>
                    <path d="M3.99698 3.43828C3.98294 3.30047 3.92386 3.17016 3.8279 3.06532L1.26497 0.248362C1.20509 0.178767 1.13102 0.12118 1.04713 0.0789985C0.963239 0.036817 0.871227 0.0108962 0.776527 0.00276658C0.681827 -0.00536302 0.586358 0.00446365 0.495756 0.0316658C0.405153 0.0588674 0.321253 0.102894 0.249008 0.161146C0.176763 0.219398 0.117637 0.290695 0.0751212 0.370828C0.0326049 0.450962 0.00755957 0.538308 0.00146395 0.62771C-0.00463168 0.717113 0.00834587 0.80676 0.0396303 0.891359C0.0709147 0.975959 0.119872 1.0538 0.183613 1.12028L2.35066 3.50104L0.183613 5.88204C0.120391 5.94859 0.0719165 6.02638 0.0410346 6.11082C0.0101527 6.19527 -0.00251485 6.28468 0.00377532 6.3738C0.0100655 6.46292 0.0351869 6.54996 0.077665 6.62981C0.120143 6.70966 0.179122 6.78071 0.251142 6.83879C0.323161 6.89688 0.40677 6.94083 0.497062 6.96806C0.587354 6.9953 0.68251 7.00526 0.776946 6.99738C0.871383 6.9895 0.963198 6.96393 1.047 6.92217C1.13081 6.88041 1.20491 6.8233 1.26497 6.75419L3.8279 3.93723C3.89017 3.869 3.93723 3.78967 3.96628 3.70395C3.99532 3.61823 4.00577 3.52788 3.99698 3.43828Z" fill="white"></path>
                </svg>
            </li> */}

            <GeneratePath leadingRoutes={leadingRoutes} />

            <li itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
                <span itemProp="name" className="text-primary leading-3 text-[12px]">{nameOfRoute.includes("-") ? nameOfRoute.split("-").join(" ") : nameOfRoute}</span>
                <meta itemProp="position" content="2" />
            </li>
        </ol>
    )
}

export default Breadcrumb 
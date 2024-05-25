import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <main className='lg:pt-20 pt-10 overflow-x-hidden'>{children}</main>
            <Footer />
        </>
    )
}
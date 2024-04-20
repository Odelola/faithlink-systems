import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <main className='py-6'>{children}</main>
            <Footer />
        </>
    )
}
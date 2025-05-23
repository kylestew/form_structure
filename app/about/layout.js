import NavBar from '@/app/components/navbar'
import Footer from '@/app/components/footer'

export default function Layout({ children }) {
    return (
        <>
            <div className="w-full bg-dark">
                <NavBar />
            </div>
            <main className="bg-light">
                <section className="projects max-w-6xl mx-auto p-6">{children}</section>
            </main>
            <Footer />
        </>
    )
}

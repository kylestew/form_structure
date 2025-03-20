import NavBar from '@/app/components/navbar'
import Footer from '@/app/components/footer'

export default function Layout({ children }) {
    return (
        <>
            <div className="w-full bg-dark">
                <NavBar />
            </div>
            <main className="bg-white">
                <section className="max-w-4xl mx-auto p-6 py-12">{children}</section>
            </main>
            <Footer />
        </>
    )
}

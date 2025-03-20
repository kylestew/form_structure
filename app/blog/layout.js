import NavBar from '@/app/ui/navbar'
import Footer from '@/app/ui/footer'

export default function BlogLayout({ children }) {
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

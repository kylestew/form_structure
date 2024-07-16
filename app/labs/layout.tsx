import NavBar from '@/app/ui/navbar'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className="w-full bg-dark">
                <NavBar />
            </div>
            <main className="bg-light">
                <section className="projects max-w-6xl mx-auto p-6">{children}</section>
            </main>
        </>
    )
}

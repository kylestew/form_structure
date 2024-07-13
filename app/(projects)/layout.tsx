import NavBar from '@/app/ui/navbar'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className="w-full bg-black">
                <NavBar />
            </div>
            <main>{children}</main>
        </>
    )
}

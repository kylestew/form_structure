export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="h-screen flex">
            <div className="flex-1 flex items-center justify-center h-full">{children}</div>
            <div className="w-72 bg-pink">
                Right column content <br /> and navbar
            </div>
        </div>
    )
}

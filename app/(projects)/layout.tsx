import NavBarSide from '@/app/ui/navbar-side'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="h-screen flex">
            <div className="flex-1 flex items-center justify-center h-full p-8">{children}</div>
            <div className="flex flex-col w-80 border-l-2 border-gray">
                <div className="info p-4">
                    <div className="text-white text-3xl uppercase pb-4">Dancing Laser Ferries</div>
                    <div className="text-white text-sm">
                        Sometimes a line is just a line... or is it. Exploration on wandering and drawing lines.
                    </div>
                </div>

                <div className="tools flex-1 flex flex-col items-center justify-center space-y-4 p-4">
                    <span className="text-white font-mono">status...</span>
                    <button>Run/Pause</button>
                    <button>Randomize</button>
                    <button>Capture</button>
                </div>

                <NavBarSide />
            </div>
        </div>
    )
}

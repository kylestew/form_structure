import NavBarSide from '@/app/ui/navbar-side'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="h-screen flex flex-col md:flex-row">
            <div className="flex-1 flex items-center justify-center h-full p-8 order-1 md:order-none">{children}</div>
            <div className="flex flex-col w-full md:w-80 border-t-2 md:border-t-0 md:border-l-2 border-gray order-2 md:order-none">
                <div className="info p-4">
                    <div id="title" className="text-white text-3xl uppercase pb-4">
                        Loading...
                    </div>
                    <div id="description" className="text-white text-sm"></div>
                </div>

                <div className="tools flex-1 flex flex-col items-center justify-center space-y-4 p-4">
                    <span id="status" className="text-white font-mono hidden">
                        ...
                    </span>
                    <button id="run" className="hidden">
                        Run
                    </button>
                    <button id="randomize" className="hidden">
                        Randomize
                    </button>
                    <button id="capture" className="hidden">
                        Capture
                    </button>
                </div>

                <NavBarSide />
            </div>
        </div>
    )
}

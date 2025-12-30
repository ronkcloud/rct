import { Card } from './card'
import { SidePanel } from './side-panel'
import { Settings, Home, Bell } from 'lucide-react'
import { Routes, Route } from "react-router";

export function App() {
    const sidebarItems = [
        { icon: <Home size={20} />, label: "Home" },
        { icon: <Bell size={20} />, label: "Notifications" },
        { icon: <Settings size={20} />, label: "Settings" },
    ]

    return (
        <div id="app" className="flex w-full h-full bg-bg">
            <SidePanel items={sidebarItems} />
            {/* <Header/ > */}
            <Routes>
                <Route index element={<Card />} />
            </Routes>
            {/* <Footer /> */}
        </div>
    )
}
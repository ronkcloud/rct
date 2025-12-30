import { Card } from './card'
import { SidePanel } from './side-panel'

export function App() {
    return (
        <div id="app" className="flex w-full h-full bg-bg">
            <SidePanel />
            {/* <Header/ > */}
            <Card />
            {/* <Footer /> */}
        </div>
    )
}
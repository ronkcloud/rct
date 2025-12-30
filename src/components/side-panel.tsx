import { useState } from "react";
import { PanelLeft } from "lucide-react";

export function SidePanel() {
    const [isExpand, setIsExpand] = useState(false);

    return (
        <div className={`bg-bg-light ${isExpand? 'min-w-48': 'min-w-12'}`}>
            <div
                className="flex items-center justify-center bg-bg-light m-2 w-8 h-8 cursor-pointer rounded-xl hover:bg-highlight transition-all active:scale-90"
                onClick={() => setIsExpand(!isExpand)}
            >
                <PanelLeft size={20}/>
            </div>
        </div>   
    )
}
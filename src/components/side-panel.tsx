import { useState } from "react"

export function SidePanel() {
    const [isExpand, setIsExpand] = useState(false);

    return (
        <div className={`bg-bg-light ${isExpand ? 'min-w-48' : 'min-w-12'}`}>
            <div 
                className="bg-primary w-4 h-4 rounded-sm m-4 cursor-pointer"
                onClick={() => setIsExpand(!isExpand)}    
            >
            </div>
        </div>
    )
}
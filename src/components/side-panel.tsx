import { useState, createContext, useContext, type ReactNode } from "react";
import { PanelLeft } from "lucide-react";

interface SidePanelContextType {
    isExpand: boolean;
    setIsExpand: (value: boolean) => void;
}

const SidePanelContext = createContext<SidePanelContextType | undefined>(undefined);

function useSidePanel() {
    const context = useContext(SidePanelContext);
    if (!context) {
        throw new Error("useSidePanel must be used within SidePanelProvider");
    }
    return context;
}

interface ItemProps {
    icon: ReactNode;
    label: string;
    onClick?: () => void;
}

function Item({ icon, label, onClick }: ItemProps) {
    const { isExpand } = useSidePanel();

    return (
        <div
            className={`
                flex items-center px-2 gap-2
                bg-bg-light h-8 w-full
                cursor-pointer rounded-lg
                hover:bg-highlight transition-all
                active:scale-95
            `}
            onClick={onClick}
        >
            {icon}
            {isExpand && <p className="ml-2">{label}</p>}
        </div>
    );
}

function SidePanelHeader() {
    const { isExpand, setIsExpand } = useSidePanel();

    return (
        <div
            className={`
                flex items-center justify-center
                bg-bg-light h-8 w-9
                cursor-pointer rounded-xl
                hover:bg-highlight transition-all
                active:scale-95
            `}
            onClick={ () => setIsExpand(!isExpand) }
        >
            {<PanelLeft size={20} />} 
        </div>
    );
}

function SidePanelContent({ items }: { items: ItemProps[] }) {
    return (
        <div>
            {items.map((item, index) => (
                <Item 
                    key={index} 
                    icon={item.icon} 
                    label={item.label} 
                    onClick={() => () => {}}
                />
            ))}
        </div>
    );
}

export function SidePanel({ items = [], children }: { items?: ItemProps[], children?: ReactNode }) {
    const [isExpand, setIsExpand] = useState(false);

    return (
        <SidePanelContext.Provider value={{ isExpand, setIsExpand }}>
            <div className={`bg-bg-light p-2 ${isExpand ? 'min-w-48' : 'min-w-12'} transition-all`}>
                <SidePanelHeader />
                <SidePanelContent items={items} />
                {children}
            </div>
        </SidePanelContext.Provider>
    );
}
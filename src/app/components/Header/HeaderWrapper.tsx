import { ReactNode } from "react";

export const HeaderWrapper: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <div className="header bg-rose-600 flex flex-col items-center justify-center p-4 pb-10 space-y-2">
            <div className="flex items-center justify-center space-x-4">
                {children}
            </div>
        </div>
    );
};

export default HeaderWrapper;

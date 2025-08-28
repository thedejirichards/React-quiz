import type { ReactNode } from "react"

function MainComponent({children}: {children:ReactNode}) {
    return (
        <div className="main">
            {children}
        </div>
    )
}

export default MainComponent

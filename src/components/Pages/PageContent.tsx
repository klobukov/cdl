import React, {Fragment, ReactNode} from "react"
import Header from "../Header"
import Navigation from "../Navigation"
import Footer from "../Footer"
import ArrowUp from "../ArrowUp"

export default function PageContent(content: ReactNode) {
    return <Fragment>
        <Header/>
        <Navigation/>
        <main>
            {content}
        </main>
        <Footer/>
        <ArrowUp/>
    </Fragment>
}
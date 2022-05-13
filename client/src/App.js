import React from "react";
import { BrowserRouter, Route } from "react-router-dom"

const PageOne = ()  => {
    return (
        <div>
            Page1!
            {/* Bad code. don't use anchor tags. */}
            <a href="/2">Go to page 2</a>
        </div>
    )
}

const PageTwo = () => {
    return(
        <div>
            Page2!
            {/* Bad code. don't use anchor tags. */}
            <a href="/">Go to page 1</a>
        </div>
    )
}

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Route path="/" exact component={PageOne}></Route>
                <Route path="/2" component={PageTwo}></Route>
            </div>
        </BrowserRouter>
    )
}

export default App;
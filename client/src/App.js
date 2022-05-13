import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom"

const PageOne = ()  => {
    return (
        <div>
            Page1!
            {/* Good code. Use link instead of anchor tags. */}
            <Link to="/2">Go to page 2</Link>
        </div>
    )
}

const PageTwo = () => {
    return(
        <div>
            Page2!
            {/* Good code. Use link instead of anchor tags. */}
            <Link to="/">Go to page 1</Link>
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
import React from "react";
import { BrowserRouter, Route } from "react-router-dom"

const PageOne = ()  => {
    return (
        <div>Page1!</div>
    )
}

const PageTwo = () => {
    return(
        <div>Page2!</div>
    )
}

const App = () => {
    return (
        <BrowserRouter>
            <Route path="/" exact component={PageOne}></Route>
            <Route path="/2" component={PageTwo}></Route>
        </BrowserRouter>
    )
}

export default App;
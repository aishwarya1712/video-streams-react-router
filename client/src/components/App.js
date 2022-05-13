import React from "react";
import { BrowserRouter, Route } from "react-router-dom"
import Header from "./Header";
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";

const App = () => {
    return (
        <div class="ui container">
            {/*Can't place Header outside BrowserRoute because it contains a Link tag */}
            <BrowserRouter>
                < Header/>
                <div>
                    <Route path="/" exact component={StreamList}></Route>
                    <Route path="/streams/new" component={StreamCreate}></Route>
                    <Route path="/streams/edit" component={StreamEdit}></Route>
                    <Route path="/streams/delete" component={StreamDelete}></Route>
                    <Route path="/streams/show" component={StreamShow}></Route>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App;
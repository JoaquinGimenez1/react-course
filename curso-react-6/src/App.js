import React from 'react';
import {Router, Route, Switch} from "react-router-dom";
import './App.css';
import StreamEdit from "./components/strems/StreamEdit";
import StreamShow from "./components/strems/StreamShow";
import StreamDelete from "./components/strems/StreamDelete";
import StreamList from "./components/strems/StreamList";
import StreamCreate from "./components/strems/StreamCreate";
import Header from "./components/Header";
import history from "./history";

function App() {
  return (
    <div className="ui container">
        <Router history={history}>
            <Header/>
            <Switch>
                <Route path='/' exact component={StreamList}/>
                <Route path='/streams/new' exact component={StreamCreate}/>
                <Route path='/streams/edit/:id' exact component={StreamEdit}/>
                <Route path='/streams/delete/:id' exact component={StreamDelete}/>
                <Route path='/streams/:id' exact component={StreamShow}/>
            </Switch>
        </Router>
    </div>
  );
}

export default App;

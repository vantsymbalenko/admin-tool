import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { configureStore } from 'store/configStore';

//components
import AddImage from 'containers/add-image/AddImage';
import EditImage from 'containers/EditImage';
import ListOfImages from 'containers/image-list/ListOfImages';
import {Header} from "components/header/Header";
import {NotFound} from "components/not-found/NotFound";

import './App.css';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <React.Fragment>
            <Header/>
              <div  className={"main-content"}>
                <Switch>
                  <Route exact path={"/"} component={ListOfImages}/>
                  <Route path={"/add"} component={AddImage}/>
                  <Route path={"/edit/:id"} component={EditImage}/>
                  <Route component={NotFound} />
                </Switch>
              </div>
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;

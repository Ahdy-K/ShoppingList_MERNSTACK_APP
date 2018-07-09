import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList'
import {Provider} from 'react-redux'
import store from './store'
import ItemModal from './components/itemModal'
import {Container} from 'reactstrap'
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Container>
          <div className="App">
            <AppNavbar />
            <ItemModal />
            <ShoppingList />
          </div>
        </Container>
      </Provider>
    );
  }
}

export default App;

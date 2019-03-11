import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import ProductImage from './product-image';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Products from './products';
import ProductDetails from './product-details';

class App extends Component {
  constructor() {
  
    super();
    
    this.state = {
      name: 'LEV',
      count:0,
      tags:['apple','orange','banna']
    };
  }

  render() {
    return (
      <div>
         <section>
              <header>
                      <Hello name={this.state.name} />
              </header>
          
              <main>
               

                <Router>
                          <div>
                          
                            <Switch>
                        
                                <Route exact path='/' component={Products} />
                                <Route exact path='/products' component={Products} />

                                <Route
                                path='/products/:id/:name'
                               component= {ProductDetails}
                              />
                            </Switch>
                          </div>
                      </Router>
              
              </main>
          
              <footer>
                  
              </footer>
          
          </section>
      </div>
    );
  }
}

export default App;
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../Style/Header.scss';


class Header extends Component {

    static defaultProps= {
        onNewRecipe(){
          console.log("clicked");
        }
      }
    
      static propTypes = {
        onNewRecipe:PropTypes.func
      }
    render(){
        return (
            <div>
            <header className="container">
            <h2><a>A React Project</a></h2>
            <ul>
                
            <li>
              <a onClick={this.props.onNewRecipe}>New Recipe</a>
            </li>
            {/* <li>
              <a onClick={this.props.onNewRecipe}>New Recipe</a>
            </li>
            <li>
              <a onClick={this.props.onNewRecipe}>New Recipe</a>
            </li> */}
            </ul>
              
            </header>  
          </div>
        );
    }

  }

  export default Header;
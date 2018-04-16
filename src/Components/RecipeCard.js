import React, { Component } from 'react';
import Recipe3 from './Recipe3';
// import Recipe2 from './Recipe2';
// import Recipe3 from './Recipe3';
import PropTypes from 'prop-types';
// import '../Style/RecipeBox.scss';

class RecipeCard extends Component {

  // static defaultProps= {
  //   onView(){
  //     console.log("clicked");
  //   }
  // }

  // static propTypes = {
  //   recipes: PropTypes.arrayOf(PropTypes.object).isRequired,
  //   onDelete: PropTypes.func.isRequired,
    
  // }

  render() {
    // const {onDelete,onView} = this.props;
    // const recipes = this.props.recipes.map((r,index) => (
    //   <Recipe3 key={r.id} {...r} 
    //   onDelete={onDelete}
    //   onView={onView}
    //   on
    //    />
    
    // ));
    return (
      <div>
        <main>
        <article>
          <div className="recipe-list">
          {/* {recipes} */}
          </div>
          </article>
          {/* <nav>SIDE NAV</nav> */}
          {/* <aside>ASIDE</aside> */}
        </main>
      </div>
    );
  }
}

export default RecipeCard;

import React, { Component } from 'react';
// import Recipe1 from './Recipe1';
import Recipe2 from './Recipe2';
// import Recipe3 from './Recipe3';
import PropTypes from 'prop-types';
import Test from './Test';
// import '../Style/RecipeBox.scss';

class ListView extends Component {
  constructor(props){
    super(props);
    this.state = {
       recipeCard: [],
       fullView: false
    }
    this.onChoose = this.onChoose.bind(this);
  }
  static propTypes = {
    recipes: PropTypes.arrayOf(PropTypes.object).isRequired,
    onDelete: PropTypes.func.isRequired
  }
  onChoose(id) {
    const recipe1 = this.props.recipes[id];
    // const recipe1 = this.props.recipes.filter(r => r.id === id);
    // this.setState({recipeCard:this.props.recipes.filter(r => r.id === id)})
    this.setState({fullView: true});
    
    
  //   // this.setState({recipes});
  //     // console.log(this.state.recipeCard);

  //   console.log(recipe1);
  
    }
  render() {
    const {onDelete} = this.props;
    const {fullView} = this.state;
    const recipes = this.props.recipes.map((r,index) => (
      <Recipe2 key={r.id} {...r} onDelete={onDelete}
      onChoose={this.onChoose} />
    
    ));
    return (
      <div>
        <main>
        <article>
          <div onClick={this.props.onFullView} className="recipe-list">
          {recipes}
          { fullView ? <Test recipes={recipes} onChoose={this.onChoose} onClose={() => this.setState({fullView: false})} /> : null } 
          </div>
          </article>
          {/* <nav>SIDE NAV</nav> */}
          {/* <aside>ASIDE</aside> */}
        </main>
      </div>
    );
  }
}

export default ListView;

import React, { Component } from 'react';
import Header from './Components/Header';
import GridView from './Components/GridView';
import ListView from './Components/ListView';
import Test from './Components/Test';
// import RecipeCard from './Components/RecipeCard';
import RecipeInput from './Components/RecipeInput'
// import Footer from './Components/Footer';
import './App.scss';
import RecipeCard from './Components/RecipeCard';


class App extends Component {
constructor(props){
super(props);
this.state = {
recipes:[
{
id:0,
title: "Spaghetti",
instructions: "Open jar of Spaghetti sauce. Bring to simmer. Boil water. Cook pasta until done. Combine pasta and sauce",
ingredients: ["pasta", "8 cups water", "1 box spaghetti"],
img: "https://images.pexels.com/photos/8500/food-dinner-pasta-spaghetti-8500.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
},
{
id:1,
title: "Milkshake",
instructions: "Combine ice cream and milk. Blend until creamy",
ingredients: ["2 Scoops Ice cream", "8 ounces milk"],
img: "https://i.ytimg.com/vi/2DWCzrH8Zp8/maxresdefault.jpg"
},
{
id:2,
title: "Avocado Toast",
instructions: "Toast bread. Slice avocado and spread on bread. Add salt, oil, and pepper to taste.",
ingredients: ["2 slices of bread", "1 avocado", "1 tablespoon olive oil", "1 pinch of salt", "pepper"],
img: "https://images.media-allrecipes.com/userphotos/960x960/4582292.jpg"
}
],
nextRecipeId:3,
showForm:false,
status:true
}
this.handleSave = this.handleSave.bind(this);
this.onDelete = this.onDelete.bind(this);
// this.onChoose = this.onChoose.bind(this);
// this.handleView = this.handleView.bind(this);
// this.handleView = this.handleView.bind(this);
}
handleSave(recipe) {
this.setState((prevState, props) => {
const newRecipe = {...recipe, id: this.state.nextRecipeId};
return {
nextRecipeId: prevState.nextRecipeId + 1,
recipes: [...this.state.recipes, newRecipe],
showForm: false
// showBox:true,
// status: true
}
});
}
onDelete(id) {
const recipes = this.state.recipes.filter(r => r.id !== id);
this.setState({recipes});
// console.log(recipes);

}



changeStatus(val){
    if (this.state.status !== val) {
      this.setState({ status: val});
      console.log(val);
    }
  }

render() {
// const {showForm,showBox,status} =this.state;
const {showForm,status, fullView, recipes} =this.state;
return (
<div className="App">
<Header onNewRecipe={() => this.setState({showForm: true})} />
<button onClick={() => this.changeStatus(true)}><i className="fas fa-th"></i></button>
<button onClick={() => this.changeStatus(false)}><i className="fas fa-list"></i></button>
{ showForm ? <RecipeInput onSave={this.handleSave} onClose={() => this.setState({showForm: false})} /> : null }
{ status ? 
<GridView onDelete={this.onDelete} 
recipes={recipes} /> : 
<ListView onDelete={this.onDelete}  
recipes={recipes} /> }
{/* { fullView ? <RecipeCard 
onSave={this.handleSave} 
onDelete={this.onDelete} 
onClose={() => this.setState({showForm: false})} />: null} */}
{/* { fullView ? <Test recipes={recipes} onChoose={this.onChoose} onClose={() => this.setState({fullView: false})} /> : null }  */}
{/* <Footer /> */}
{/* <div>
{recipes[2].title}
</div> */}
</div>
);
}
}
export default App;

import React, {Component} from 'react';
import PropTypes from 'prop-types';
// import '../Style/Recipe.scss';

class Recipe3 extends Component{

    static propTypes = {
    title: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    instructions: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    onChoose: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
  }
  
    render() {
        const {title, img , instructions, id, onChoose, onDelete} = this.props;
        // const {onClose} = this.props;
        const ingredients = this.props.ingredients.map((ing,index)=>(
            <li key={index}>{ing}</li>
            ));
        return(
            <div className="recipe-card">
            <div className="recipe-card-image">
                <img src={img} alt={title} />    
                       
            </div>
            {/* <h3 className="recipe-title">{title}</h3>   */}
            <button type='button' onClick={() => onChoose(id)}><i className="far fa-times-circle fa-2x"></i></button>
            <div className="recipe-card-content">
               <h3 className="recipe-title">{title}</h3> 
               <h4>Ingredients:</h4>
               <ul>
               {ingredients}
               </ul>
               <h4>Instructions:</h4>
               <p>{instructions}</p>
               <button type='button'><i onClick={() => onDelete(id)} className="fas fa-trash-alt"></i></button>
           </div>

           </div>
            );
    }
}

export default Recipe3;
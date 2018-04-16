import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Recipe3 from './Recipe3';

class Test extends Component{
    static propTypes = {
        recipes: PropTypes.arrayOf(PropTypes.object).isRequired
        // ,
        // onChoose: PropTypes.func.isRequired
      }


    render(){
        const {title, img , id,instructions,ingredients,onDelete} = this.props;
        // const recipes = this.props.recipes.map((r,index) => (
            
        //     <Recipe3 key={r.id} {...r} 
        //     onChoose={onChoose} onDelete={onDelete} />
        //   ));
        const recipes =this.props.recipes;
        return(
            <div>
                <h1>Hello<i className="far fa-times-circle" onClick={this.props.onClose}></i></h1>
                {recipes}
            </div>
        );
    }
}

export default Test;
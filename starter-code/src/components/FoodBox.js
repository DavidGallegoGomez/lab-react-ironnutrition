import React from 'react';

class FoodBox extends React.Component {
  render() {
    const { food } = this.props

    return (
      <div className="padding-box">
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={ food.image } alt={ food.name } />
            </figure>
          </div>
      <div className="media-content">
        <div className="content">
          <p>
            <strong>{ food.name }</strong> <br />
            <small>{ food.calories }</small>
          </p>
        </div>
      </div>
      <div className="media-right">
        <div className="field has-addons">
          <div className="control">
            <input
              className="input"
              type="number" 
              value={ food.quantity }
            />
          </div>
        <div className="control">
          <button className="button is-info"> + </button>
        </div>
      </div>
    </div>
  </article>
</div>
</div>
    )
  }
}

export default FoodBox;
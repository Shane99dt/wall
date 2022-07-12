import React from 'react'

class Card extends React.Component {
  render() {
    return (
      <div className="d-flex flex-column border border col-5 m-2">
        <article className="d-flex flex-row px-4 pt-4">
          <img src= {this.props.picture} height="120px" width="120px" ></img>
          <h4 className="align-self-center p-4">{this.props.name}</h4>
        </article>
        <article className='p-4'>
          <p>
            {this.props.about}
          </p>
        </article>
    </div>
    )
  }
}

export default Card
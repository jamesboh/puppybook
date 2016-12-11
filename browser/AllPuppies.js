import React from 'react';

export default class AllPuppies extends React.Component {

  render () {
    return (
      <div>
        <ul className="list-unstyled">
          { this.props.allPuppies.map( puppy => <li key={puppy.id}><a href="#">{puppy.name}</a></li> ) }
        </ul>
      </div>
    )
  }
}
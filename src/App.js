import React from 'react'
import users from './users.json'
import Card from './components/Card'

class App extends React.Component {
  render() {
    // const array = JSON.parse(users)
    return (
      <div className="container-fluid d-flex flex-column justify-content-start">
        <h1 className="mt-3 mx-5">The wall</h1>
        <div className="d-flex flex-row flex-wrap justify-content-center">
          {users.map(user => {
            return (
              <Card name = {user.name} picture={user.picture} about={user.about} />
              )
            })}
        </div>
      </div>
    )
  }
}

export default App
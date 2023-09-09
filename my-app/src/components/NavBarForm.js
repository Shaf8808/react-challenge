import React, { Component } from 'react'
import css from './css/NavBarForm.module.css'
import NavBarChild from './NavBarChild'


class NavBarForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }

    handleClick = () => {
        this.setState((prevState) => ({
            isLoggedIn: prevState.isLoggedIn ? false: true
        }), () => console.log(this.state.isLoggedIn))
    }

    
  render() {
    return (
        <div className={css.NavBar}>
            <h1>My Gallery</h1>
            
            {/* {this.state.isLoggedIn ? 
            <button onClick={() => this.handleClick()}>Login</button>
            :
            <form>
              <label htmlFor='username'>Username</label>
              <input id='username'></input>
              <label htmlFor='password'>Password</label>
              <input id='password'></input>
              <button onClick={() => this.handleClick()}>Submit</button>
            </form>
  } */}
  <NavBarChild 
  isLoggedIn={this.isLoggedIn}
  handleClick={this.handleClick}
  />

        </div>
    )
  }
}

export default NavBarForm
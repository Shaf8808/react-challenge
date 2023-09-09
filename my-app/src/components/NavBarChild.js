import React from 'react'

function NavBarChild(props) {
  return (
    
        props.isLoggedIn ?
        
          <button onClick={props.handleClick}>Login</button>
          :
          <form>
              <label htmlFor='username'>Username</label>
              <input id='username'></input>
              <label htmlFor='password'>Password</label>
              <input id='password'></input>
              <button onClick={props.handleClick}>Submit</button>
          </form>
  )
}

export default NavBarChild
import React, { Component } from 'react'
import css from "./css/Content.module.css";
import {savedPosts} from '../posts.json'
import PostItem from './PostItem';
import Loader from './Loader';

export class Content extends Component {
    constructor(props) {
      super(props)

      this.state = {
        isLoaded: false,
        posts: []
      }
    }

    componentDidMount() {
      setTimeout(() => {
        this.setState({
          isLoaded: true,
          posts: savedPosts,
        })
      }, 4000)
      
    }

    handleChange = (event) => {
      // Stores event and assigns it to name variable
      const name = event.target.value.toLowerCase()
      // Filters posts and then returns a post in relation to name
      // variable
      const filteredPosts = savedPosts.filter((post) => {
        return post.name.toLowerCase().includes(name)
      })
      // Sets empty array posts state to filteredposts
      this.setState ({
        posts: filteredPosts
      })
    }


  render() {
    return (
      <div className={css.Content}>
        <div className={css.TitleBar}>
          <form>
            <label htmlFor='searchInput'>Search</label>
            <input 
            id='searchInput' 
            type='search'
            // Add onChange attribute to input field 
            // that stores user event
            // and refers to handleChange function
            onChange={(event) => this.handleChange(event)}
            />
            {/* Returns length of posts */}
            <h4>posts found: {this.state.posts.length}</h4>
          </form>
            <h1 style={{marginLeft: '10px'}}>My Photos</h1>
            <div className={css.SearchResults}>
              { 
                this.state.isLoaded ?
                // Sending posts state value to the child component
                // PostItem.js
                <PostItem savedPosts={this.state.posts} />
                : <Loader />
              }
            </div>
        </div>
      </div>
    )
  }
}

export default Content
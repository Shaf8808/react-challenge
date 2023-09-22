import React, { Component } from 'react'
import css from "./css/Content.module.css";
import PostItem from './PostItem';
import Loader from './Loader';
import PostItemAPI from './PostItemAPI';
import axios from 'axios'
import API_KEY from '../secrets'; // Store API key in secrets.js

export class ContentAPI extends Component {
    constructor(props) {
      super(props)

      this.state = {
        isLoaded: false,
        posts: [],
        savedPosts: []
      }
    }

    componentDidMount() {
      this.fetchImages()
      
    }

    async fetchImages() {
      const response = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&per_page=10`) // API url with API key using backticks
      const fetchedPosts = response.data.hits
      console.log(response)
      this.setState({
        isLoaded: true,
        posts: fetchedPosts,
        savedPosts: fetchedPosts
      })
    }

    handleChange = (event) => {
      // Stores event and assigns it to name variable
      const name = event.target.value.toLowerCase()
      // Filters posts and then returns a post in relation to name
      // variable
      const filteredPosts = this.state.savedPosts.filter((post) => {
        return post.user.toLowerCase().includes(name)
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
          <h1 style={{ marginLeft: '10px' }}>My Photos</h1>
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
        </div>
            <div className={css.SearchResults}>
              { 
                this.state.isLoaded ?
                // Sending posts state value to the child component
                // PostItem.js
                <PostItemAPI savedPosts={this.state.posts} />
                : <Loader />
              }
            </div>
        
      </div>
    )
  }
}

export default ContentAPI
import React, { useState, useEffect } from 'react'
import css from "./css/Content.module.css";
import Loader from './Loader';
import PostItemAPI from './PostItemAPI';
import axios from 'axios'
import API_KEY from '../secrets'; // Store API key in secrets.js

function ContentAPIHooks() {
  // [Variable, setter function]
  const [isLoaded, loadContent] = useState(false)
  const [posts, loadPosts] = useState([])
  const [savedPosts, loadSavedPosts] = useState([])

  useEffect(() => {
    fetchImages()
  }, []) // ALWAYS REMEMBER TO INCLUDE EMPTY ARRAY TO RUN FUNCTION ONCE!!!!!

  const fetchImages = async () => {
    const response = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&per_page=10`) // API url with API key using backticks
    const fetchedPosts = response.data.hits
    loadContent(true)
    loadPosts(fetchedPosts)
    loadSavedPosts(fetchedPosts)
  }

  const handleChange = (event) => {
    // Stores event and assigns it to name variable
    const name = event.target.value.toLowerCase()
    // Filters posts and then returns a post in relation to name
    // variable
    const filteredPosts = savedPosts.filter((post) => {
      return post.user.toLowerCase().includes(name)
    })
    // Sets empty array posts state to filteredposts
    loadPosts(filteredPosts)
  }


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
            onChange={(event) => handleChange(event)} 
          />
          {/* Returns length of posts (no this keyword) */}
          <h4>posts found: {posts.length}</h4> 
        </form>
      </div>
      <div className={css.SearchResults}>
        {
          isLoaded ?
            // Sending posts state value to the child component
            // PostItem.js
            <PostItemAPI savedPosts={posts} />
            : <Loader />
        }
      </div>

    </div>
  )
}

export default ContentAPIHooks
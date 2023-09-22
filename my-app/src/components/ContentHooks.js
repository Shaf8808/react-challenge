import React, {useState, useEffect} from 'react'
import css from "./css/Content.module.css";
import { savedPosts } from '../posts.json'
import PostItem from './PostItem';
import Loader from './Loader';

function ContentHooks() {
    // usestate functions with variables and their 
    // methods
    const [isLoaded, loadContent] = useState(false)
    const [fetchedPosts, fetchPost] = useState([])

    useEffect(() => {
      setTimeout(() => {
        // Use setter functions not the variable itself
        loadContent(true)
        fetchPost(savedPosts)
      }, 2000)
      // Include empty array as a parameter as we only
      // want to run the function once
    }, [])

  const handleChange = (event) => {
    // Stores event and assigns it to name variable
    const name = event.target.value.toLowerCase()
    // Filters posts and then returns a post in relation to name
    // variable
    const filteredPosts = savedPosts.filter((post) => {
      return post.name.toLowerCase().includes(name)
    })
    // Setter function callback and passes filteredposts
    fetchPost(filteredPosts)
  }

  return (
      <div className={css.Content}>
        <div className={css.TitleBar}>
          <h1>My Photos</h1>
          <form>
            <label htmlFor='searchInput'>Search</label>
            <input
              id='searchInput'
              type='search'
              // Add onChange attribute to input field 
              // that stores user event
              // and refers to handleChange function
              onChange={(event) => {handleChange(event)}}
            />
            {/* Returns length of posts */}
            <h4>posts found: {fetchedPosts.length}</h4>
          </form>
          </div>
          <div className={css.SearchResults}>
            {
              isLoaded ?
                // Sending posts state value to the child component
                // PostItem.js
                <PostItem savedPosts={fetchedPosts} />
                : <Loader />
            }
        </div>
      </div>
  )
}

export default ContentHooks
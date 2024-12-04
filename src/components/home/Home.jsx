import React from 'react'
import Posts from '../posts/Posts'
import "./home.scss"

const Home = ({allPosts, search, setSearch}) => {
  // console.log(allPosts);
  
  return (
    <>
    <form className='searchForm' onSubmit={e=> e.preventDefault()}>
      <input type="text" 
        id='search'
        placeholder='search post'
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
    </form>
    <Posts allPosts={allPosts}/>
    </>
  )
}

export default Home
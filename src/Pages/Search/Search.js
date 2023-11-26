import { Button } from '@mui/material'
import React from 'react'
import SearchResult from '../../Components/SearchResult/SearchResult'
import "./Search.css"
const Search = () => {
  return (
    <div className='searchPage'>
      <div className="searchPage__info">
        <h1>Stays nearby</h1>
        <Button variant='outlined'>Cancellation Flexibility</Button>
        <Button variant='outlined'>Types of place</Button>
        <Button variant='outlined'>Price</Button>
        <Button variant='outlined'>Rooms and Beds</Button>
        <Button variant='outlined'>More Filters</Button>
      </div>
      <SearchResult
      img="https://lp-cms-production.imgix.net/news/2017/10/34884794003_79b7caebee_k-e1509108009678.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850&q=23&dpr=4"
      location="Aus"
      title="Inside the world’s most expensive luxury hotel suite"
      description="luxury hotel"
      star="4.8"
      price="$500/night"
      total="$1999 total"
      />
      <SearchResult
      img="https://lp-cms-production.imgix.net/news/2017/10/34884794003_79b7caebee_k-e1509108009678.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850&q=23&dpr=4"
      location="Aus"
      title="Inside the world’s most expensive luxury hotel suite"
      description="luxury hotel"
      star="4.7"
      price="$500/night"
      total="$1999 total"
      />
      <SearchResult
      img="https://lp-cms-production.imgix.net/news/2017/10/34884794003_79b7caebee_k-e1509108009678.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850&q=23&dpr=4"
      location="Aus"
      title="Inside the world’s most expensive luxury hotel suite"
      description="luxury hotel"
      star="4.6"
      price="$500/night"
      total="$1999 total"
      />
      <SearchResult
      img="https://lp-cms-production.imgix.net/news/2017/10/34884794003_79b7caebee_k-e1509108009678.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850&q=23&dpr=4"
      location="Aus"
      title="Inside the world’s most expensive luxury hotel suite"
      description="luxury hotel"
      star="4.5"
      price="$500/night"
      total="$1999 total"
      />
    </div>
  )
}

export default Search
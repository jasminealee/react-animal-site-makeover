import React from 'react';
import Blog from './Blog';
import { Link } from 'react-router-dom';


const masterBlogList = [
  {
    title: 'Furball',
    species: 'Roborovski Hamster',
    note: 'Today I adopted my first hamster. He seems shy, but maybe over time he will come out of his shell.'
  },
  {
    title: 'Loopdey Loop',
    species: 'Beta Fish',
    note: 'Rain learned how to jump through hoops.'
  },
  {
    title: 'Candy',
    species: 'Rabbit',
    note: 'Candy ate 10 carrots in 15 minutes. She has a new record.'
  }
];

function BlogList() {
  return (
    <div>
      <Link to="/">Home</Link> | <Link to="/animals">Animals</Link> | <Link to="/blogs">Blogs</Link> | <Link to="/about">About</Link>
      <h1>Animals: </h1>
      <hr/>
      {masterBlogList.map((blog, index) =>
        <Blog
          title={blog.title}
          species={blog.species}
          note={blog.note}
          key={index}/>
      )}
    </div>
  );
}


export default BlogList;
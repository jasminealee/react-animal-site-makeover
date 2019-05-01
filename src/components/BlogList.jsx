import React from 'react';
import Blog from './Blog';
import PropTypes from 'prop-types';



function BlogList() {
  return (
    <div>
      <Link to="/">Home</Link> | <Link to="/animals">Animals</Link> | <Link to="/blogs">Blogs</Link> | <Link to="/newanimal">New Animal</Link> | <Link to="/about">About</Link>
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

import React from 'react';
import PropTypes from 'prop-types';

function Blog(props){
  const blog = {
    backgroundColor: '#ecf0f1',
    fontFamily: 'sans-serif',
    paddingTop: '5px'
  };
  return (
    <div style={blog}>
      <h3>{props.title}</h3>
      <h3>{props.species}</h3>
      <h3>{props.note}</h3>
      <hr/>
    </div>
  );
}



Blog.propTypes = {
  title: PropTypes.string,
  species: PropTypes.string,
  note: PropTypes.string,
};

export default Blog;

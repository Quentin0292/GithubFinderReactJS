import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import GithubContext from '../../Context/github/githubContext';

const Search = ({ openAlert, showClear, clearUsers }) => {
  const githubContext = useContext(GithubContext);

  // use hook useState() to create a state here
  // text: ''
  const [text, setText] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    if (text === '') {
      openAlert('Please enter something', 'light');
    } else {
      githubContext.searchUsers(text);
      setText('');
    }
  };

  const onChange = e => setText(e.target.value);

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          placeholder='Search Users...'
          value={text}
          onChange={onChange}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>
      {showClear && (
        <button className='btn btn-light btn-block' onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

Search.propTypes = {
  clearUsers: PropTypes.func.isRequired,
  openAlert: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired
};

export default Search;

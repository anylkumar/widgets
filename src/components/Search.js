import React, { useState } from 'react';

const Search = () => {
  const [term, setTerm] = useState('');

  const onInputChange = (event) => {
    setTerm(event.target.value);
  };

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label htmlFor="text">Enter Search Term</label>
          <input
            onChange={this.onInputChange}
            value={term}
            id="text"
            type="text"
          />
        </div>
      </div>
    </div>
  );
};

export default Search;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  const [term, setTerm] = useState('');

  useEffect(() => {
    const search = async () => {
      await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: term,
        },
      });
    };
    search();
  }, [term]);

  const onInputChange = (event) => {
    setTerm(event.target.value);
  };

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label htmlFor="text">Enter Search Term</label>
          <input onChange={this.onInputChange} id="text" type="text" />
        </div>
      </div>
    </div>
  );
};

export default Search;

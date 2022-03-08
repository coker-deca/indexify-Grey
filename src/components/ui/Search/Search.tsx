import React, { FC } from 'react';

export interface SearchProps {
    value: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search: FC<SearchProps> = ({ value, handleChange }) => {
  return (
    <div className="search">
      <input
        type="search"
        placeholder="Search for a user"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;

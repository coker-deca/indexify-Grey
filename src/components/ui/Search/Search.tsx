import React, { FC } from 'react';
import { InputContainer } from './Style';

export interface SearchProps {
    value: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search: FC<SearchProps> = ({ value, handleChange }) => {
  return (
    <InputContainer>
      <input
        type="search"
        placeholder="Search for a user"
        value={value}
        onChange={handleChange}
      />
    </InputContainer>
  );
};

export default Search;

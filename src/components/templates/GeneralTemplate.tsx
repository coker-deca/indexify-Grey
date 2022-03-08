import { FC } from 'react';

import { Logo } from '../ui/Logo/Logo';
import Search, { SearchProps } from '../ui/Search/Search';
import { TableWrapper } from '../ui/Table/Style';
import { NavBar } from './Style';

export const Template: FC<SearchProps> = ({
  value,
  handleChange,
  children,
}) => {
  return (
    <>
      <NavBar>
        <Logo />
        <Search value={value} handleChange={handleChange} />
      </NavBar>
      {children}
    </>
  );
};

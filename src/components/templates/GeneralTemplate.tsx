import { FC } from 'react';

import Button from '../ui/Button/Button';
import { Logo } from '../ui/Logo/Logo';
import Search, { SearchProps } from '../ui/Search/Search';
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
        <Button value="Logout" />
      </NavBar>
      {children}
    </>
  );
};

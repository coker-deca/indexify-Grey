import { FC } from 'react';
import { useHistory } from 'react-router-dom';

import { persistor } from '../..';
import Button from '../ui/Button/Button';
import { Logo } from '../ui/Logo/Logo';
import Search, { SearchProps } from '../ui/Search/Search';
import { NavBar } from './Style';

export const Template: FC<SearchProps> = ({
  value,
  handleChange,
  children,
}) => {
  const history = useHistory();
  const handleClick = () => {
    persistor.purge();
    history.push("/sign_up");
  };
  return (
    <>
      <NavBar>
        <Logo />
        <Search value={value} handleChange={handleChange} />
        <Button value="Logout" onClick={handleClick} />
      </NavBar>
      {children}
    </>
  );
};

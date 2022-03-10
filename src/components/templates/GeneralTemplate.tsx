import { FC } from 'react';
import { RiLogoutBoxRFill } from 'react-icons/ri';
import { useMediaQuery } from 'react-responsive';
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
  const isSmallScreen = useMediaQuery({ query: "(max-width: 425px)" });
  const handleClick = () => {
    persistor.purge();
    history.push("/sign_up");
  };
  return (
    <>
      <NavBar useMediaQuery={isSmallScreen}>
        <div className={"wrapper"}>
          <div className={"logo"}>
            <Logo />
          </div>
          <div className={"search"}>
            <Search value={value} handleChange={handleChange} />
            <Button className={"logout-word"} onClick={handleClick}>
              Logout
            </Button>
            <Button className={"logout-logo"} onClick={handleClick}>
              <RiLogoutBoxRFill />
            </Button>
          </div>
        </div>
      </NavBar>
      {children}
    </>
  );
};

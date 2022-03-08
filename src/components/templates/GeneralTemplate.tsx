import { FC } from 'react';

import { Logo } from '../ui/Logo/Logo';
import Search, { SearchProps } from '../ui/Search/Search';
import { TableWrapper } from '../ui/Table/Style';

export const Template: FC<SearchProps> = ({
  value,
  handleChange,
  children,
}) => {
  return (
    <>
      <nav>
        <Logo />
        <TableWrapper>
          <Search value={value} handleChange={handleChange} />
        </TableWrapper>
      </nav>
      {children}
    </>
  );
};

import { FC } from 'react';

import Card from '../components/ui/Card/Card';
import { Logo } from '../components/ui/Logo/Logo';
import { PageContainer } from './Style';

export const SignUp: FC = () => (
  <PageContainer>
    <Logo />
    <Card />
  </PageContainer>
);

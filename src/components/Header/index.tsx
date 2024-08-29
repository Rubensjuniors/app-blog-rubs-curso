import { mainNavConfig } from '@/configs'

import { Logo } from '@/components/Logo'
import { MainNav } from '@/components/MainNav'

import * as S from './styles'

export const Header = () => (
  <S.Container>
    <S.Content>
      <Logo />

      <MainNav items={mainNavConfig} />
    </S.Content>
  </S.Container>
)

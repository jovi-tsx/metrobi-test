import * as S from './styles';

const Container: React.FC<Q3.Container.Props> = ({ children }) => (
  <S.Wrapper>{children}</S.Wrapper>
);

export default Container;

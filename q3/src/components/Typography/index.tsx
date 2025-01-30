import * as S from './styles';

const Typography: React.FC<Q3.Typography.Props> = ({
  variant = 'body1',
  ...props
}) => {
  switch (variant) {
    case 'h1':
      return <S.H1 {...props} />;
    case 'h2':
      return <S.H2 {...props} />;
    case 'body1':
    default:
      return <S.Body1 {...props} />;
  }
};

export default Typography;

import Typography from 'components/Typography';
import * as S from './styles';

const Card: React.FC<Q3.Card.Props & Q3.Card.Wrapper> = ({
  title,
  description,
  ...wrapperProps
}) => (
  <S.Wrapper {...wrapperProps}>
    {typeof title === 'string' ? (
      <Typography variant="h2">{title}</Typography>
    ) : (
      title
    )}
    {description && <p>{description}</p>}
  </S.Wrapper>
);

export default Card;

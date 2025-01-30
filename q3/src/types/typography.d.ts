declare namespace Q3 {
  namespace Typography {
    interface Props extends React.ComponentProps<'p'> {
      variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'p';
      description?: string;
    }
  }
}

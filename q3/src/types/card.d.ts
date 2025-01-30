declare namespace Q3 {
  namespace Card {
    interface Props extends React.ComponentProps<'div'> {
      title: React.ReactElement | string;
      description?: string;
      as?: React.ElementType;
    }

    interface Wrapper {
      width?: number | string;
      height?: number | string;
      bgColor:
        | 'skyblue'
        | 'lilac'
        | 'yellow'
        | 'pistachio'
        | 'grey'
        | 'green'
        | 'pink'
        | 'orange'
        | 'text';
    }
  }
}

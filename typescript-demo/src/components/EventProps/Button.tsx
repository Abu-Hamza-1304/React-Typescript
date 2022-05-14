type ButtonProps = {
  /*
    If we need the event passes in the click handler, the type of
    this click event is React type. The type of the event is:
    React.MouseEvent
    We can also be more specific by saying this is a button click
    by adding angle brackets and within it, HTMLButtonElement.
    NOTE: We don't have to import the HTMLButtonElement as it is
    readily available in the typescipt environment.
  */
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

export const Button = (props: ButtonProps) => {
  return (
    <button onClick={(event) => props.handleClick(event, 1)}>Click</button>
  );
};

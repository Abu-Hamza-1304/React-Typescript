type GreetProps = {
  name: string;
  messageCount?: number;
  /*
    If we remove messageCount prop in the App.tsx file,
    typescript throws an error saying that we are missing
    the prop as "Property messageCount is missing in the
    type GreetProps".
    The way we inform typescript that messageCount prop is
    optional is "by including a question mark at the end of
    the prop name where we define the type".
  */
  isLoggedIn: boolean;
};

export const Greet = (props: GreetProps) => {
  const { messageCount = 0 } = props;
  return (
    <div>
      <h2>
        {props.isLoggedIn
          ? `Welcome ${props.name}! You have ${props.messageCount} unread messages.`
          : "Welcome Guest"}
      </h2>
    </div>
  );
};

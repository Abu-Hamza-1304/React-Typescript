type ContainerProps = {
    styles: React.CSSProperties
    /*
        If we're using react version less than 17,
        we have to import React at the top.
    */
}

export const Container = (props: ContainerProps) => {
  return (
    <div style={props.styles}>
      Text content goes here
    </div>
  );
};

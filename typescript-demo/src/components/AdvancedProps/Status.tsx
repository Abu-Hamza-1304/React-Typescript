type StatusProps = {
  // status: string;
  /* Our message can handle only a status of loading, success
  or error. The status type though is any "string". So we could
  pass in a completely random string and typescript doesn't
  flag it as an error.
  To fix this, we can use a union of string literals as status
  type as showm below:*/
  status: "loading" | "success" | "error";
};

export const Status = (props: StatusProps) => {
  let message;
  if (props.status === "loading") {
    message = "Loading...";
  } else if (props.status === "success") {
    message = "Data fetched successfully!";
  } else if (props.status === "error") {
    message = "Error fetching data.";
  }

  return (
    <div>
      <h2>Status - {message}</h2>
    </div>
  );
};

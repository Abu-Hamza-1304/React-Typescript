import "./App.css";
// import { Greet } from "./components/BasicProps/Greet";
// import { Person } from "./components/BasicProps/Person";
// import { PersonList } from "./components/BasicProps/PersonList";
// import { Status } from "./components/AdvancedProps/Status";
// import { Heading } from "./components/AdvancedProps/Heading";
// import { Oscar } from "./components/AdvancedProps/Oscar";
// import { Greet } from "./components/BasicProps/Greet";
// import { Button } from "./components/EventProps/Button";
// import { Input } from "./components/EventProps/Input";
// import { Container } from "./components/StyleProps/Container";
// import { LoggedIn } from "./components/StateHook/LoggedIn";
// import { User } from "./components/StateHook/User";
// import { Counter } from "./components/StateHook/Counter";
// import { ThemeContextProvider } from "./components/ContextHook/ThemeContext";
// import { Box } from "./components/ContextHook/Box";
// import { UserContextProvider } from "./components/ContextHook/UserContext";
// import { UserTwo } from "./components/ContextHook/UserTwo";
// import { DomRef } from "./components/RefHook/DomRef";
// import { MutableRef } from "./components/RefHook/MutableRef";
// import { CounterTwo } from "./components/Class/CounterTwo";
// import { Private } from "./components/Auth/Private";
// import { Profile } from "./components/Auth/Profile";
// import { List } from "./components/Generics/List";
// import { RandomNumber } from "./components/Restriction/RandomNumber";
// import { Toast } from "./components/TemplateLiterals/Toast";
// import { CustomButton } from "./components/HTML/CustomButton";
import { Text } from "./components/Polymorphic/Text";

function App() {
  // const personName = {
  //   first: "Bruce",
  //   last: "Wayne",
  // };

  // const namesList = [
  //   {
  //     first: "Bruce",
  //     last: "Wayne",
  //   },
  //   {
  //     first: "Clark",
  //     last: "Kent",
  //   },
  //   {
  //     first: "Princess",
  //     last: "Diana",
  //   },
  // ];

  return (
    <div className="App">
      {/* <Greet name="Abu" messageCount={20} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={namesList} />
      <Status status="loading" />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Taylor Swift!</Heading>
      </Oscar>
      <Greet name="Abu" isLoggedIn={false} />
      <Button
        handleClick={(event, id) => {
          console.log("Button clicked", event, id);
        }}
      />
      <Input value="" handleChange={(event) => console.log(event)} />
      <Container styles={{ border: "1px solid black", padding: "1rem" }} />
      <LoggedIn /> 
      <User />
      <Counter />
      // <ThemeContextProvider>
      //   <Box />
      // </ThemeContextProvider>
      // <UserContextProvider>
      //   <UserTwo />
      // </UserContextProvider>
      <DomRef />
      <MutableRef />
      <CounterTwo message="The count value is" />
      <Private isLoggedIn={true} component={Profile} />
      // <List
      //   items={["Batman", "Superman", "Wonder Woman"]}
      //   onClick={(item) => console.log(item)}
      // />
      // <List items={[1, 2, 3]} onClick={(item) => console.log(item)} />
      // <List items={[
      //   {
      //     first: "Bruce",
      //     last: "Wayne"
      //   },
      //   {
      //     first: "Clark",
      //     last: "Kent"
      //   },
      //   {
      //     first: "Princess",
      //     last: "Diana"
      //   }
      // ]} onClick={(item) => console.log(item)} />
      <RandomNumber value={10} isPositive />
      <Toast position="center" />
      // <CustomButton variant="primary" onClick={() => console.log("Clicked")}>
      //   Primary Button
      // </CustomButton> */}
      <Text as="h2" size="l">
        Heading
      </Text>
      <Text as="p" size="m">
        Paragraph
      </Text>
      <Text as="label" size="s" color="secondary">
        Label
      </Text>
    </div>
  );
}

export default App;

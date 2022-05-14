type OscarProps = {
    children: React.ReactNode
    // this type is from the @types/react": "^18.0.9" package
    
    /*
        Passing react components as children props is pretty common
        and hence we make use of the react node type from the react
        types package.     
    */
}

export const Oscar = (props: OscarProps) => {
  return (
    <div>{props.children}</div>
  )
}

import React from "react"
import { Greet } from "../BasicProps/Greet"

export const CustomComponent = (props: React.ComponentProps<typeof Greet>) => {
  return (
    <div>{props.name}</div>
  )
}

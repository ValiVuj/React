import { getId } from "../helpers";

export default function CurrentId() {
    return(<p>Your unique ID is { getId() }</p>)
  }
  
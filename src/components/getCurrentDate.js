import { getCurrentDate } from "../helpers";

export default function CurrentDate() {
    return(<p>how you doing, today is {getCurrentDate()}</p>)
  }
import { getRandomName, getRandomColor } from "../random";

export default function UserInfo() {
    return<p>My name is { getRandomName()} and my favorite color is { getRandomColor() }</p>
  }
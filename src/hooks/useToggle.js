import { useState } from "react";

export default function useToggle(initialValue) {
  const [value, setValue] = useState(() => initialValue);

  function toggle(value) {
    setValue((prevValue) => {
      return typeof value === "boolean" ? value : !prevValue;
    });
  }

  return [value, toggle];
}

import { useEffect } from "react";

export function useKeyListener(key, action) {
  useEffect(
    function () {
      function callBack(e) {
        if (e.code === key) {
          action();
        }
      }

      document.addEventListener("keydown", callBack);

      return function () {
        document.removeEventListener("keydown", callBack);
      };
    },
    [action, key]
  );
}

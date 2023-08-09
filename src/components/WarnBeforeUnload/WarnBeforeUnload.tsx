import React, { FC, useEffect } from "react";

export const WarnBeforeUnload: FC = () => {
  const handleBeforeUnload = (event: BeforeUnloadEvent) => {
    event.preventDefault();
    event.returnValue = ""; // Это значение игнорируется большинством браузеров, но стоит включить на всякий случай
  };

  useEffect(() => {
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return null;
};

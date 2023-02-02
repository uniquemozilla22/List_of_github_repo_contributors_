import { useState } from "react";
import { SearchComponent } from "./../Components/Search.comp";

export const HomePage = () => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <SearchComponent
        onChange={(e) => setInput(e.target.value)}
        value={input}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

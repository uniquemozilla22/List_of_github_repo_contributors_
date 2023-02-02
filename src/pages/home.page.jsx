import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchComponent } from "./../Components/Search.comp";

export const HomePage = () => {
  const [input, setInput] = useState("");
  const navigation = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigation("list", { state: { id: 7, color: "green" } });
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

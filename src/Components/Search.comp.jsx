import { Input } from "../UI/Input.ui";
import styled from "@emotion/styled";
import SearchIcon from "@mui/icons-material/Search";
export const SearchComponent = ({ onChange, value, handleSubmit }) => {
  return (
    <Container handlSubmit={handleSubmit}>
      <Input
        icon={<SearchIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />}
        label={"Paste your github repositary link here"}
        onChange={onChange}
        value={value}
      />
      <SubmitButton type="submit" />
    </Container>
  );
};

const Container = styled.form`
  background: #fafafa;
  color: #2b2b2b;
  width: 50vw;
  border-radius: 10px;
  padding: 1rem 2rem;
`;

const SubmitButton = styled.input`
  display: none;
`;

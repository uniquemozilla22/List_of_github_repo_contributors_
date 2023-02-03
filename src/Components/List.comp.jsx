import styled from "@emotion/styled";
import { GitHub } from "@mui/icons-material";
import { Avatar, Tooltip } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const ListComponent = ({ login, avatar_url, contributions }) => {
  const navigation = useNavigate();
  return (
    <Container
      onClick={() => navigation("/userdetail", { state: { username: login } })}
    >
      <Avatar src={avatar_url} sx={{ width: 100, height: 100 }} />
      <ContentContainer>
        <h1>{login}</h1>
        <p>Contributions: {contributions}</p>
        <IconContainer>
          <Tooltip title={`Visit ${login}'s github`}>
            <GitHub />
          </Tooltip>
        </IconContainer>
      </ContentContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 40%;
  min-width: 300px;
  gap: 2rem;
  max-height: 100%;
  border: 1px solid #fafafa;
  padding: 1rem;
  border-radius: 10px;

  &:hover h1 {
    text-decoration: underline;
  }
  &:hover {
    cursor: pointer;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 3;
`;

const IconContainer = styled.div``;

// login(pin):"aws-sdk-python-automation"
// id(pin):43144185
// node_id(pin):"MDQ6VXNlcjQzMTQ0MTg1"
// avatar_url(pin):"https://avatars.githubusercontent.com/u/43144185?v=4"
// gravatar_id(pin):""
// url(pin):"https://api.github.com/users/aws-sdk-python-automation"
// html_url(pin):"https://github.com/aws-sdk-python-automation"
// followers_url(pin):"https://api.github.com/users/aws-sdk-python-automation/followers"
// following_url(pin):"https://api.github.com/users/aws-sdk-python-automation/following{/other_user}"
// gists_url(pin):"https://api.github.com/users/aws-sdk-python-automation/gists{/gist_id}"
// starred_url(pin):"https://api.github.com/users/aws-sdk-python-automation/starred{/owner}{/repo}"
// subscriptions_url(pin):"https://api.github.com/users/aws-sdk-python-automation/subscriptions"
// organizations_url(pin):"https://api.github.com/users/aws-sdk-python-automation/orgs"
// repos_url(pin):"https://api.github.com/users/aws-sdk-python-automation/repos"
// events_url(pin):"https://api.github.com/users/aws-sdk-python-automation/events{/privacy}"
// received_events_url(pin):"https://api.github.com/users/aws-sdk-python-automation/received_events"

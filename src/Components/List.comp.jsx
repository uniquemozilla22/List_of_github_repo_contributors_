import styled from "@emotion/styled";
import { GitHub } from "@mui/icons-material";
import { Avatar, Tooltip } from "@mui/material";

export const ListComponent = ({ login, avatar_url }) => {
  return (
    <Container>
      <Avatar src={avatar_url} sx={{ width: 40, height: 40 }} />

      <ContentContainer>
        <h1>{login}</h1>
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
  width: 400px;
  gap: 1rem;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
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

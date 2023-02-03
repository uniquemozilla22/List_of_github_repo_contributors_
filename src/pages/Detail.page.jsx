import styled from "@emotion/styled";
import { Avatar, Tooltip } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { fetchUser } from "./../Store/slice/userDetail";
import { GitHub } from "@mui/icons-material";

export const DetailPage = () => {
  const user = useSelector((state) => state.user);

  //   const data = {
  //     login: "SCalwas",
  //     id: 44212839,
  //     node_id: "MDQ6VXNlcjQ0MjEyODM5",
  //     avatar_url: "https://avatars.githubusercontent.com/u/44212839?v=4",
  //     gravatar_id: "",
  //     url: "https://api.github.com/users/SCalwas",
  //     html_url: "https://github.com/SCalwas",
  //     followers_url: "https://api.github.com/users/SCalwas/followers",
  //     following_url:
  //       "https://api.github.com/users/SCalwas/following{/other_user}",
  //     gists_url: "https://api.github.com/users/SCalwas/gists{/gist_id}",
  //     starred_url: "https://api.github.com/users/SCalwas/starred{/owner}{/repo}",
  //     subscriptions_url: "https://api.github.com/users/SCalwas/subscriptions",
  //     organizations_url: "https://api.github.com/users/SCalwas/orgs",
  //     repos_url: "https://api.github.com/users/SCalwas/repos",
  //     events_url: "https://api.github.com/users/SCalwas/events{/privacy}",
  //     received_events_url: "https://api.github.com/users/SCalwas/received_events",
  //     type: "User",
  //     site_admin: false,
  //     name: "Steven Calwas",
  //     company: null,
  //     blog: "",
  //     location: null,
  //     email: null,
  //     hireable: null,
  //     bio: null,
  //     twitter_username: null,
  //     public_repos: 4,
  //     public_gists: 0,
  //     followers: 1,
  //     following: 0,
  //     created_at: "2018-10-16T20:26:11Z",
  //     updated_at: "2019-05-23T23:03:39Z",
  //   };
  const {
    state: { username },
  } = useLocation();
  const dispatch = useDispatch();

  const [data, setData] = useState(user.data);

  const fetchData = useCallback(async () => {
    dispatch(fetchUser(username));
    setData(user.data);
  }, [dispatch, user.data, username]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return data ? (
    <Container>
      <Title>{data?.name || data.login}</Title>
      <IconContainer>
        <Tooltip title={`Visit ${data.login} github`} sx={{ float: "right" }}>
          <GitHub />
        </Tooltip>
      </IconContainer>
      <Block>
        <Avatar src={data?.avatar_url} sx={{ height: 500, width: 500 }} />
      </Block>
      <ContentContainer>
        <h1>@{data?.login}</h1>
        <hr />
        <Description>
          <Paragraph>
            Followers
            <span>{data.followers}</span>
          </Paragraph>
          <Paragraph>
            Bio
            <span>{data.bio || "N/A"}</span>
          </Paragraph>
          <Paragraph>
            Following
            <span>{data.following || "N/A"}</span>
          </Paragraph>
          <Paragraph>
            Public Repos
            <span>{data.public_repos || "N/A"}</span>
          </Paragraph>
          <Paragraph>
            Public Gists
            <span>{data.public_gists || "N/A"}</span>
          </Paragraph>
          <Paragraph>
            Location
            <span>{data.location || "N/A"}</span>
          </Paragraph>
          <Paragraph>
            Hireable
            <span>{data.hireable || "N/A"}</span>
          </Paragraph>
          <Paragraph>
            Email
            <span>{data.email || "N/A"}</span>
          </Paragraph>
        </Description>
      </ContentContainer>
    </Container>
  ) : (
    <h1>Loading...</h1>
  );
};

const Paragraph = styled.p`
  border: 1px solid #fafafa;
  flex: 1;

  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-radius: 1rem;
`;

const Description = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;
const Title = styled.h1`
  font-size: 30px;
  flex: 3;
`;

const IconContainer = styled.div`
  flex: 1;
  align-items: flex-end;
`;

const Block = styled.div`
  background: #fafafa;
  color: #2b2b2b !important;
  border-radius: 1rem;
`;

const Container = styled.div`
  display: grid;
  justify-content: space-around;
  grid-template-columns: 2fr 3fr;
  gap: 5vw;
  color: #fafafa !important;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

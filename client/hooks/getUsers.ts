import { useQuery, gql } from "@apollo/client";

export const GET_USERS = gql`
  query getUsers($cursor: ID) {
    users(first: 20, cursor: $cursor) {
      edges {
        node {
            id,
            name
            title
            avatar
            empId
            jobTitle
            jobDesc
            companyName
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`;

function useUsers() {
  const { data, loading, fetchMore } = useQuery(GET_USERS, {
    notifyOnNetworkStatusChange: true,
  });
  if (loading && !data) {
    console.log("data1 ", data)
    return { loading, users: [] };
  }
  const loadMore = () => {
    return fetchMore({
      query: GET_USERS,
      variables: {
        cursor: data.users.pageInfo.endCursor,
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        const newEdges = fetchMoreResult.users.edges;
        const pageInfo = fetchMoreResult.users.pageInfo;
        return newEdges.length
          ? {
            users: {
              __typename: previousResult.users.__typename,
              edges: [...previousResult.users.edges, ...newEdges],
              pageInfo,
            },
          }
          : previousResult;
      },
    });
  };
  return {
    users: data.users.edges.map(({ node }) => node),
    hasNextPage: data.users.pageInfo.hasNextPage,
    loading,
    loadMore,
  };
}
export default useUsers;
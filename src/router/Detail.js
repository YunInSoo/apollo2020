import { React } from "react";
import { useParams } from "react-router-dom";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const GET_MOVIE = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
      id
      title
      medium_cover_image
      isLiked @client
    }
  }
`;
export default () => {
  const { id } = useParams();
  console.log(typeof id);
  const { loading, data } = useQuery(GET_MOVIE, {
    variables: {
      id: parseInt(id),
    },
  });
  if (loading) return <div>loading....</div>;
  if (data) return <div>{JSON.stringify(data)}</div>;
};

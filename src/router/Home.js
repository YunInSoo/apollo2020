import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const GET_MOVIES = gql`
  {
    movies {
      id
      medium_cover_image
    }
  }
`;
export default () => {
  const { loading, error, data } = useQuery(GET_MOVIES);

  console.log(loading, data);
  return <h1>Home : {loading}</h1>;
};

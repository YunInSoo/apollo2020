import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import Movie from "../components/Movie";

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
  if (loading) {
    return "loading....";
  }
  if (data?.movies) {
    return data.movies.map(m => <Movie key={m.id} test="2" id={m.id} />);
  }
};

import React from "react";
import { Link } from "react-router-dom";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const LIKE_MOVIE = gql`
  mutation likeMovie($id: Int!) {
    likeMovie(id: $id) @client
  }
`;
export default ({ id, test }) => {
  const [likeMovie] = useMutation(LIKE_MOVIE, {
    variables: {
      id: parseInt(id),
    },
  });
  return (
    <div>
      <Link to={`/${id}`}>{id}</Link>
    </div>
  );
};

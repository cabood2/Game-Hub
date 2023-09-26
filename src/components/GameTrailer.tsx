import React from "react";
import { Game } from "../entities/Game";
import APIClient from "../services/api-client";
import { useQuery } from "@chakra-ui/react";
import useTrailers from "../hooks/useTrailers";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailers(gameId);
  console.log(data);

  if (isLoading) return null;
  if (error) throw error;

  const first = data?.results[1];
  return !first ? null : (
    <video poster={first.preview} src={first.data[480]} controls></video>
  );
};

export default GameTrailer;

import React from "react";
import useScreenshot from "../hooks/useScreenshot";
import { Grid, SimpleGrid, Image } from "@chakra-ui/react";

interface Props {
  gameId: number;
}
const Screenshots = ({ gameId }: Props) => {
  const { data, error, isLoading } = useScreenshot(gameId);

  //   if (isLoading) return null;
  //   if (error) return error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      {data?.results.map((file) => (
        <Image key={file.id} src={file.image} />
      ))}
    </SimpleGrid>
  );
};

export default Screenshots;

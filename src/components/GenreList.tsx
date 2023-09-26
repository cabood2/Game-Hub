import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Skeleton,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import { Genre } from "../entities/Genre";
import useGameQueryStore from "../services/store";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();

  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);

  if (error) return null;
  if (isLoading) return <Spinner></Spinner>;

  return (
    <>
      <Heading fontSize={"2xl"} marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem paddingY={1} key={genre.id}>
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={genre.image_background}
                objectFit="cover"
              ></Image>
              <Button
                onClick={() => setSelectedGenreId(genre.id)}
                fontSize="lg"
                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                variant="link"
                whiteSpace="normal"
                textAlign="left"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;

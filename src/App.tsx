import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, //1024 px
      }}
    >
      <GridItem area="nav" bg="coral">
        NAV
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="pink">
          aside
        </GridItem>
      </Show>
      <GridItem area="main" bg="blue">
        main
      </GridItem>
    </Grid>
  );
}

export default App;

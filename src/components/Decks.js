import decks from "../decks.json";
import {Button, Card, CardContent, Stack, Typography} from "@mui/material";

function Decks() {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      direction="column"
      spacing={3}
      style={{textAlign: "center", padding: "20px"}}
    >
      {
        Object.keys(decks).map(id => {
          const deck = decks[id];
          return (
            <Card
              key={id}
              style={{width: "100%"}}
            >
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {deck.name}
                </Typography>
                {deck.description ? (
                  <Typography color="text.secondary">
                    {deck.description}
                  </Typography>
                ) : null}
                <br/>
                <Button
                  variant="contained"
                  href={`/decks/${id}`}>
                  START!
                </Button>
              </CardContent>
            </Card>
          );
        })
      }
    </Stack>
  );
}

export default Decks;

import {useHeardTerms} from "../../hooks/useHeardTerms";
import {Alert, Button, Container, Paper, Stack, Typography} from "@mui/material";

export const Card = ({question, answer, showAnswer, onSelectShowAnswer}) => {
  const heardAnswer = useHeardTerms(answer ? answer : null);

  return (
    <Container>
      <Stack
        spacing={3}
      >
        <Paper
          elevation={3}
          height="100%"
          style={{padding: "20px", textAlign: "center", minHeight: "calc(100vw - 40px)"}}
        >
          <Typography variant="h3">
            {question}
          </Typography>
        </Paper>
        {heardAnswer === false ? (
          <Alert severity="error">Try Again!</Alert>
        ) : null}
        {heardAnswer === true ? (
          <Alert severity="success">Correct!</Alert>
        ) : null}
        <Button onClick={() => onSelectShowAnswer(!showAnswer)}>
          {showAnswer ? "Hide Answer" : "Show Answer"}
        </Button>
        {
          showAnswer ? (
            <Alert severity="info" variant="outlined" style={{fontWeight: 600}}>
              Answer: {answer}
            </Alert>
          ) : (
            ""
          )
        }
      </Stack>
    </Container>
  );
};
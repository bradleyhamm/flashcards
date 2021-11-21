import {Button, Grid, Stack, ToggleButton, Typography} from "@mui/material";

export const HeaderControls = ({cardIndex, cardCount, speechEnabled, onSelectReset, onSelectSpeech}) => {
  return (
    <Stack
      direction="row"
      alignItems="baseline"
      justifyContent="space-between"
      spacing={2}
      width="100%"
    >
      <Grid item xs={4}>
        <Button
          size="small"
          variant="outlined"
          onClick={onSelectReset}
        >
          Start Over
        </Button>
      </Grid>
      <Grid item xs={4} style={{textAlign: "center"}}>
        <Typography variant="body2">
          {cardIndex + 1} / {cardCount}
        </Typography>
      </Grid>
      <Grid item xs={4} style={{textAlign: "right"}}>
        <ToggleButton
          size="small"
          color="primary"
          value="check"
          selected={speechEnabled}
          onClick={() => onSelectSpeech(!speechEnabled)}
        >
          &nbsp;&#x1F5E3;&nbsp;
        </ToggleButton>
      </Grid>
    </Stack>
  );
};
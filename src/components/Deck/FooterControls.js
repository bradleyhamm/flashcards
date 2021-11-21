import {Button, ButtonGroup} from "@mui/material";

export const FooterControls = ({onSelectNext, onSelectPrev}) => {
  return (
    <ButtonGroup
      size="large"
      fullWidth
    >
      <Button
        variant="outlined"
        onClick={onSelectPrev}
      >
        &#x21B6; Previous
      </Button>
      <Button
        variant="contained"
        onClick={onSelectNext}
      >
        Next &#x21B7;
      </Button>
    </ButtonGroup>
  );
};
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
        &#129044; Previous
      </Button>
      <Button
        variant="contained"
        onClick={onSelectNext}
      >
        Next &#129046;
      </Button>
    </ButtonGroup>
  );
};
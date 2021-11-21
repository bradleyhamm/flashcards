import {useState} from 'react';
import {Card} from "./Card";
import {useParams} from "react-router-dom";
import decks from "../../decks.json";
import {shuffle} from "../../util";
import {Container, Stack} from "@mui/material";
import {HeaderControls} from "./HeaderControls";
import {FooterControls} from "./FooterControls";

export const Deck = () => {
  const params = useParams();
  const deck = decks[params.deckId];
  const cards = [...deck.cards];
  const randomize = false;
  if (randomize) {
    shuffle(cards);
  }
  const [cardIndex, setCardIndex] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [isFailure, setIsFailure] = useState(false);
  const [speechEnabled, setSpeechEnabled] = useState(true);

  const card = cards[cardIndex];

  const getNextCardIndex = () => {
    if (cardIndex === null) {
      return 0;
    }

    if (cardIndex >= cards.length - 1) {
      return null;
    }

    return (cardIndex + 1) % cards.length;
  };

  const getPrevCardIndex = () => {
    if (cardIndex === null) {
      return cards.length - 1;
    }
    return (cardIndex - 1 + cards.length) % cards.length;
  }

  const clean = () => {
    if (!showAnswer) {
      setShowAnswer(false);
    }

    if (isFailure) {
      setIsFailure(false);
    }
  };

  const setPrevCard = () => {
    clean();
    setCardIndex(getPrevCardIndex());
  };

  const setNextCard = () => {
    clean();
    setCardIndex(getNextCardIndex());
  }

  const handleReset = () => {
    clean();
    setCardIndex(0);
  };

  if (!card) {
    setNextCard();
  }

  return (<Container
    style={{padding: "20px", height: "calc(100vh - 40px)"}}
  >
    <Stack
      spacing={3}
      direction="column"
      alignItems="center"
      height="100%"
      justifyContent="start"
    >
      <HeaderControls
        cardIndex={cardIndex}
        cardCount={cards?.length || 0}
        speechEnabled={speechEnabled}
        onSelectReset={handleReset}
        onSelectSpeech={() => setSpeechEnabled(!speechEnabled)}
      />
      <Card
        question={card?.q}
        answer={card?.a}
        showAnswer={showAnswer}
        onCorrectAnswer={setNextCard}
        onSelectShowAnswer={setShowAnswer}
      />
    </Stack>
    <FooterControls
      onSelectPrev={setPrevCard}
      onSelectNext={setNextCard}
    />
  </Container>);
};

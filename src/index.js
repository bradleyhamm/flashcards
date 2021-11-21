import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Decks from "./components/Decks";
import {Deck} from "./components/Deck";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {createTheme, ThemeProvider} from "@mui/material";

const theme = createTheme();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Decks/>}/>
          <Route path="decks/:deckId" element={<Deck/>}/>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
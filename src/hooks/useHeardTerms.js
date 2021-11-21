import {useEffect, useRef, useState} from "react";

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const SpeechGrammarList = window.SpeechGrammarList || window.webkitSpeechGrammarList;

const buildGrammer = terms => `#JSGF V1.0; grammar answers; public <answer> = ${terms.join(" | ")} ;`;

const normalizeTerm = term => term ? term.toLowerCase().trim() : null;

export const useHeardTerms = term => {
  const [status, setStatus] = useState(null);
  const termRef = useRef(term);

  useEffect(() => {
    if (!(SpeechRecognition && SpeechGrammarList)) {
      return;
    }

    if (termRef.current !== term && status !== null) {
      termRef.current = term;
      setStatus(null);
    }

    const normalizedTerm = normalizeTerm(term);

    const recognition = new SpeechRecognition();
    const grammarList = new SpeechGrammarList();
    const grammar = buildGrammer([normalizedTerm]);
    grammarList.addFromString(grammar, 1);

    recognition.grammars = grammarList;
    recognition.continuous = true;
    recognition.lang = navigator.language || "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    recognition.onresult = event => {
      const transcript = event.results[event.results.length - 1][0].transcript;
      if (normalizedTerm.includes(transcript.trim().toLowerCase())) {
        setStatus(true);
        recognition.stop();
      } else {
        setStatus(false);
      }
    };

    recognition.start();

    return () => {
      recognition.abort();
    };
  }, [status, term]);

  return status;
};
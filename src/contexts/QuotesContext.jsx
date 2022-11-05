// ............ React Module
import React from "react";
import { createContext, useState } from "react";

export const QuotesContext = createContext();

const QuotesContextProvider = ({ children }) => {
  // ............ States
  const [quoteData, setQuoteData] = useState([]);
  const [isAutoQuotes, setIsAutoQuotes] = useState(true);
  const [pageIsLoading, setPageIsLoading] = useState(true);
  const [autoQuotesInterval, setAutoQuotesInterval] = useState();
  const [fetchPrevQuotesIndex, setFetchPrevQuotesIndex] = useState(1);
  const localData = JSON.parse(localStorage.getItem("QuotesId"));
  const [prevQuoteId, setPrevQuoteId] = useState(
    localData?.length ? localData : []
  );

  // ............ Fetch Data Functions
  const getQuote = async () => {
    const quotesFromServer = await fetchQuotes().catch((error) => {
      console.log("Error => ", error.message);
      setIsAutoQuotes(false);
    });
    setQuoteData(quotesFromServer);
    setPrevQuoteId((prev) => prev.concat(quotesFromServer?.id));
  };

  const fetchQuotes = async () => {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    setPageIsLoading(false);
    return data.slip;
  };

  // ............... Fetch Previous Quote
  const getPrevQuote = async () => {
    if (fetchPrevQuotesIndex < prevQuoteId?.length) {
      const quoteFromServer = await fetchPrevQuotes().catch((error) => {
        console.log("Error => ", error.message);
        setIsAutoQuotes(false);
      });
      setQuoteData(quoteFromServer);
    }
  };

  const fetchPrevQuotes = async () => {
    if (fetchPrevQuotesIndex < prevQuoteId?.length) {
      const quoteId = prevQuoteId[fetchPrevQuotesIndex]
        ? prevQuoteId[fetchPrevQuotesIndex]
        : null;
      if (quoteId) {
        const response = await fetch(
          `https://api.adviceslip.com/advice/${quoteId}`
        );
        const data = await response.json();
        setPageIsLoading(false);
        return data.slip;
      }
    }
  };

  // ............... Auto Fetch data
  const autoQuoteHandler = () => {
    if (isAutoQuotes) {
      setAutoQuotesInterval(
        setInterval(() => {
          getQuote();
        }, 5000)
      );
    } else {
      clearInterval(autoQuotesInterval);
    }
  };

  // Local Storage
  localStorage.setItem("QuotesId", JSON.stringify(prevQuoteId?.reverse()));
  if (prevQuoteId?.length > 7000) {
    setPrevQuoteId(prevQuoteId?.length ? [prevQuoteId[1], prevQuoteId[0]] : []);
  }

  const context = {
    quoteData: quoteData,
    setQuoteData: setQuoteData,
    isAutoQuotes: isAutoQuotes,
    setIsAutoQuotes: setIsAutoQuotes,
    getQuote: getQuote,
    pageIsLoading: pageIsLoading,
    setPageIsLoading: setPageIsLoading,
    autoQuoteHandler: autoQuoteHandler,
    prevQuoteId: prevQuoteId,
    getPrevQuote: getPrevQuote,
    fetchPrevQuotesIndex: fetchPrevQuotesIndex,
    setFetchPrevQuotesIndex: setFetchPrevQuotesIndex,
  };

  return (
    <QuotesContext.Provider value={context}>{children}</QuotesContext.Provider>
  );
};

export default QuotesContextProvider;

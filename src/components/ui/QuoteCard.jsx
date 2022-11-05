import { useContext } from "react";
import { QuotesContext } from "../../contexts/QuotesContext";

const QuoteCard = () => {
  const {
    isAutoQuotes,
    setIsAutoQuotes,
    quoteData,
    pageIsLoading,
    getQuote,
    prevQuoteId,
    getPrevQuote,
    setFetchPrevQuotesIndex,
    fetchPrevQuotesIndex,
  } = useContext(QuotesContext);

  const prevQuoteHandler = () => {
    getPrevQuote();
    setIsAutoQuotes(false);
    setFetchPrevQuotesIndex((prev) => prev + 1);
  };
  const nextQuoteHandler = () => {
    getQuote();
    setIsAutoQuotes(false);
    setFetchPrevQuotesIndex(1);
  };

  return (
    <div
      className="j-bg-dark-light card j-rounded text-center py-5 px-md-5 px-2"
      style={{ minHeight: "20rem", position: "relative" }}
    >
      <div
        className="form-check form-switch"
        style={{ position: "absolute", top: "1rem", right: "2rem" }}
      >
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckChecked"
          checked={isAutoQuotes}
          onChange={(e) => {
            setIsAutoQuotes((prev) => !prev);
          }}
        />
        <label
          className="form-check-label j-text-secondary"
          htmlFor="flexSwitchCheckChecked"
        >
          Auto Quotes
        </label>
      </div>
      {pageIsLoading ? (
        <div
          className="d-flex justify-content-center align-items-center text-center"
          style={{ height: "13rem" }}
        >
          <div className="spinner-border"> </div>
        </div>
      ) : (
        <>
          {/* Card header */}
          <div className="card-subtitle j-text-secondary mb-3 border-0">
            ADVICE #{quoteData.id}
          </div>
          {/* Card body */}
          <div className="card-body">
            <blockquote className="blockquote">
              <p className="mb-4">“ {quoteData.advice} ”</p>
              <footer className="blockquote-footer">
                Someone famous in <cite title="Source Title">Somewhere</cite>
              </footer>
            </blockquote>
          </div>
        </>
      )}

      <div className="d-flex justify-content-center align-items-center">
        <hr className="" style={{ width: "40%" }} />
        <i className="bi bi-pause-fill fw-bold fs-3 mx-3 j-light-link"></i>
        <hr className="" style={{ width: "40%" }} />
      </div>

      {/* Buttons */}
      <div
        className={`prev-quote-btn control-btn ${
          fetchPrevQuotesIndex < prevQuoteId?.length ? " " : "disabled"
        }`}
        onClick={
          fetchPrevQuotesIndex < prevQuoteId?.length
            ? () => {
                prevQuoteHandler();
              }
            : null
        }
      >
        <div> &lt; </div>
      </div>
      <div className="control-btn play-pause-btn-container text-center shadow">
        <i
          onClick={() => {
            setIsAutoQuotes((prev) => !prev);
          }}
          className={`bi bi-${
            isAutoQuotes ? "pause" : "play"
          }-fill fw-bold fs-2 j-cursor-pointer`}
        ></i>
      </div>
      <div
        className="next-quote-btn control-btn"
        onClick={() => {
          nextQuoteHandler();
        }}
      >
        <div> &gt; </div>
      </div>
    </div>
  );
};

export default QuoteCard;

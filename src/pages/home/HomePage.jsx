// ............. React Modules

// ............. Pages/Components
import { useEffect } from "react";
import { useContext } from "react";
import QuoteCard from "../../components/ui/QuoteCard";
import { QuotesContext } from "../../contexts/QuotesContext";

// ............ Assets

const HomePage = () => {
  const { getQuote, autoQuoteHandler, isAutoQuotes } =
    useContext(QuotesContext);
  useEffect(() => {
    getQuote();
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    autoQuoteHandler();
    // eslint-disable-next-line
  }, [isAutoQuotes]);

  return (
    <main className="row justify-content-center align-items-center h-100">
      <div className="col-xl-10 col-lg-9 col-md-8 col-sm-11 col-12">
        <QuoteCard />
      </div>
    </main>
  );
};

export default HomePage;

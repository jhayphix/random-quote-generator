import QuotesContextProvider from "./QuotesContext";

const AppContextProvider = ({ children }) => {
  return (
    <>
      <QuotesContextProvider>{children}</QuotesContextProvider>
    </>
  );
};

export default AppContextProvider;

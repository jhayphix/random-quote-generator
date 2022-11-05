import { useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();
  const pathname = location.pathname;

  return <div>Pathname "{pathname}" does not exit</div>;
};

export default NotFound;

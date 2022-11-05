// ............. React Modules

// ............. Pages

// ............ Assets

const Layout = ({ children }) => {
  return (
    <div className="row justify-content-center align-items-center h-100">
      <div className="col-lg-8 col-12 h-75 j-bg-dark-thick j-rounded">
        {children}
      </div>
    </div>
  );
};

export default Layout;

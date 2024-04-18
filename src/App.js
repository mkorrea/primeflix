import RoutesApp from "./routes";
import { ToastContainer } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <ToastContainer autoClose={3000} />
      {/* autoClose determina que, caso o usuario não clique, vai fechar automaticamente em 3 segundos */}
      <RoutesApp />
    </div>
  );
}

export default App;

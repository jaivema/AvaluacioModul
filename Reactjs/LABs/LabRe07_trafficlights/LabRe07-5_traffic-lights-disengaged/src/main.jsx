import { DataSimulations } from "./middleware/DataSimulations";
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <DataSimulations>
    <App />
  </DataSimulations>
);

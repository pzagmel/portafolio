import ReactDOM from "react-dom/client";
import Layout from './components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';

const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);
root.render(<Layout/>);

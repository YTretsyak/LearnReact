import { createRoot } from 'react-dom/client';
import { App } from './components/app.jsx';

const root = document.getElementById('root');
const reactRoot = createRoot(root);

reactRoot.render(<App/>);
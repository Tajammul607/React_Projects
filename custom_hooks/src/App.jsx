import { useCopyToClipboard } from './useCopyToClipboard';

import './App.css'

function App() {
  const [isCopied, copy] = useCopyToClipboard("Text to copy!");
  return (
    <>
    <button onClick={copy}>{isCopied ? "Copied!" : "Copy"}</button>
    </>
  );
  
}

export default App

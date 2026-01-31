import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllow, setNumberAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllow) str += "1234567890";
    if (charAllow) str += '~!@#$%^&*()_+`-=[]{};:"<>?';

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    
    setPassword(pass);

  }, [length, numberAllow, charAllow]);

  const passwordRef = useRef(null);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current.setSelectionRange(0, 99);
    window.navigator.clipboard.writeText(password);

    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllow, charAllow, passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-[200px] text-white bg-gray-800">
        <h1 className="text-center text-2xl text-white mb-4">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text" value={password} ref={passwordRef} className="outline-none w-full py-1.5 px-3 text-black placeholder:text-gray-800" placeholder="Generated Password" readOnly />
          <button onClick={copyPasswordToClipboard} className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">{copied ? "Copied" : "Copy"}</button>
        </div>
        <div className="flex text-sm gap-x-2 justify-between">
          <div className="flex items-center gap-x-1">
            <input type="range" value={length} onChange={(e) => setLength(e.target.value)} min={6} max={20} className="cursor-pointer mr-1" />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" checked={numberAllow} onChange={() => setNumberAllow((prev) => !prev)} id="numberInput" />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" checked={charAllow} onChange={() => setCharAllow((prev) => !prev)} id="characterInput" />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

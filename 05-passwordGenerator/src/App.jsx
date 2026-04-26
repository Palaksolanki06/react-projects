import { useCallback, useState, useEffect, useRef } from "react"
function App() {
  const [length, setLength] = useState(8)

  const [numberAllow, setNumberAllow] = useState(false)

  const [charAllow, setCharAllow] = useState(false)

  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    if (numberAllow) str += "0123456789"
    if (charAllow) str += "@#$%^&*()_+{}[]<>"

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(char)

      setPassword(pass)

    }

  }, [length, numberAllow, charAllow, setPassword])

  const copyPasswordTpclipbboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setselectionRange(0, 101)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  },
    [length, numberAllow, charAllow, passwordGenerator]
  )

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800">
        <h1 className='text-4xl text-center text-white my-3'>Password Generator
        </h1>

        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text" value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef} />
          <button
            onClick={copyPasswordTpclipbboard}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">copy

          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input type="range" min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => { setLength(e.target.value) }} />
            <label htmlFor="">Length:{length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input type="checkbox"
              defaultChecked={numberAllow}
              id="numberInput"
              onChange={() => {
                setNumberAllow((prev) => !prev)

              }} />
            <label htmlFor="numverInput">Numbers:</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input type="checkbox"
              defaultChecked={charAllow}
              id="characterInput"
              onChange={() =>
                setCharAllow((prev) => !prev)

              } />
            <label htmlFor="characterInput">Characters:</label>
          </div>


        </div>

      </div>




    </>
  )
}

export default App

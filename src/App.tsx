import { KeyboardEventHandler, useState, useEffect } from 'react'
import './css/App.css'
import commands from './Commands'
import pages from './Pages'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="cmd" id="cmd">
        <InputBar />
        {/* <OutputBar /> */}
      </div>
      <div className="intro">
        <div className="logo">

        </div>
        <div className="description">
          <h1>Terminal website</h1>
          <p>To begin, type "help" for a list of available commands</p>
        </div>
      </div>

    </div>
  )
}

function InputBar() {

  const [output, setOutput] = useState<string | null>(null)

  const handleInput: KeyboardEventHandler<HTMLInputElement> = (e) => {
    
    if (e.code === "Enter") {
      e.currentTarget.disabled = true;

      const search = e.currentTarget.value;

      let commFound = false;
      let resultText :string = "";

      commands.forEach(command => {
        if (command.name == search) {
          // if (search != "help"){
          //   resultText = `${command.heading}\nUsage: ${command.usage}\n${command.content}`;
          // } else {
          //   commands.forEach(comm => {
          //     resultText += `\n${comm.name} -> ${comm.heading}`;
          //   })
            
          // }
          resultText = `${command.heading}\nUsage: ${command.usage}\n${command.content}`;
          commFound = true;
        }
      })

      if (!commFound) {
        resultText = `'${search}' is not recognized as an internal or external command, operable program or batch file.`;
      }

      setOutput(resultText)
    }
  }

  return (
    <div>
      <div className="input-container">
          <label htmlFor="input-bar">C:\Users\Krisp1k\Home&gt;</label>
          <input
            type="text"
            name="input-bar"
            autoFocus
            className="input-bar"
            onKeyDown={handleInput}
          />
          <span className="blink"></span>
        </div>
      {output && (
        <div className="out-container">
          <HandleOutput text={output} />
        </div>
      )}
    </div>
  )
}

function HandleOutput(props: { text: string }) {
  return (
  <div>
    <div className="output">
      {props.text}
    </div>
    <InputBar />
  </div>)
}

export default App

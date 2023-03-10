import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'

function App() {
  const [fullTable, setFullTable] = useState([])
  const [fullOptionA, setFullOptionA] = useState([])
  const [fullOptionB, setFullOptionB] = useState([])
  const [fullOptionC, setFullOptionC] = useState([])
  const [optionA, setOptionA] = useState([])
  const [optionB, setOptionB] = useState([])
  const [optionC, setOptionC] = useState([])
  const txtFile = "A1,B1,C1\nA1,B1,C2\nA1,B1,C3\nA1,B2,C4\nA1,B2,C5\nA1,B3,C6\nA2,B4,C7\nA2,B5,C8\nA2,B5,C9\nA3,B6,C10"

  const [table, setTable] = useState([])

  function uniqueArr(a) {
    return [...new Set(a)];
  }

  // Local Solution
  /*useEffect(() => {
    fetch('src/assets/testData.txt')
      .then((r) => r.text())
      .then(text => {
        const tableLines = text.split(/\r?\n/)
        //console.log(tableLines)
        setTable(tableLines)
        setFullTable(tableLines)
        let outputA = ["All"]
        let outputB = ["All"]
        let outputC = ["All"]

        tableLines.forEach(currTableLine => {
          //console.log(currTableLine)
          const indexA = currTableLine.indexOf('A')
          const indexB = currTableLine.indexOf('B')
          const indexC = currTableLine.indexOf('C')

          let shortStr = currTableLine.substring(indexA, indexB - 1)
          outputA.push(shortStr)
          shortStr = currTableLine.substring(indexB, indexC - 1)
          outputB.push(shortStr)
          shortStr = currTableLine.substring(indexC)
          outputC.push(shortStr)
        })
        outputA = uniqueArr(outputA)
        outputB = uniqueArr(outputB)
        outputC = uniqueArr(outputC)
        setOptionA(outputA)
        setFullOptionA(outputA)
        setOptionB(outputB)
        setFullOptionB(outputB)
        setOptionC(outputC)
        setFullOptionC(outputC)
      })
  }, [])*/

  // Git Solution
  useEffect(() => {
    const tableLines = txtFile.split(/\r?\n/)
    //console.log(tableLines)
    setTable(tableLines)
    setFullTable(tableLines)
    let outputA = ["All"]
    let outputB = ["All"]
    let outputC = ["All"]

    tableLines.forEach(currTableLine => {
      //console.log(currTableLine)
      const indexA = currTableLine.indexOf('A')
      const indexB = currTableLine.indexOf('B')
      const indexC = currTableLine.indexOf('C')

      let shortStr = currTableLine.substring(indexA, indexB - 1)
      outputA.push(shortStr)
      shortStr = currTableLine.substring(indexB, indexC - 1)
      outputB.push(shortStr)
      shortStr = currTableLine.substring(indexC)
      outputC.push(shortStr)
    })
    outputA = uniqueArr(outputA)
    outputB = uniqueArr(outputB)
    outputC = uniqueArr(outputC)
    setOptionA(outputA)
    setFullOptionA(outputA)
    setOptionB(outputB)
    setFullOptionB(outputB)
    setOptionC(outputC)
    setFullOptionC(outputC)
  }, [])


  const changeField = (event) => {
    const currValue = event.target.value
    switch (currValue) {
      case "A1":
        setOptionB(["All", "B1", "B2", "B3"])
        setOptionC(["All", "C1", "C2", "C3", "C4", "C5", "C6"])
        let currTableA = []
        for (let index = 0; index < 6; index++) {
          currTableA.push(fullTable[index])
        }
        console.log(currTableA)
        setTable(currTableA)
        break
      case "B1":
        setOptionA(["All", "A2"])
        setOptionC(["All", "C7"])
        console.log(fullTable[[6]])
        setTable([fullTable[6]])
        break
      case "C10":
        setOptionA(["All", "A3"])
        setOptionB(["All", "B6"])
        setTable([fullTable[9]])
        break
      default:
        setOptionA(fullOptionA)
        setOptionB(fullOptionB)
        setOptionC(fullOptionC)
        setTable(fullTable)
        break
    }
  }
  /*- 3 Select Buttons
        -> Txt file into select fields + all option
    - Filter Checkbox
  */
  return (
    <div className="App">
      <div className="a">
        <span>A:</span>
        <select onChange={changeField}>
          {optionA.map(currOption => <option>{currOption}</option>)}
        </select>
      </div>
      <div className="b">
        <span>B:</span>
        <select onChange={changeField}>
          {optionB.map(currOption => <option>{currOption}</option>)}
        </select>
      </div>
      <div className="c">
        <span>C:</span>
        <select onChange={changeField}>
          {optionC.map(currOption => <option>{currOption}</option>)}
        </select>
      </div>
      {table.map(tableLine => <div key={tableLine}> {tableLine} </div>)}
    </div>
  )
}

export default App

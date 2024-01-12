import { useState } from 'react'
import {Grid, GridItem} from './components'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Grid className="griddy" griddyTheme="dark">
        <GridItem className="itemm" griddyPosition="bottom-center">
          <h1>Hello!</h1>
        </GridItem>
      </Grid>
    </>
  )
}

export default App

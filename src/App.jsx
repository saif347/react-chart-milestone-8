
import './App.css'
import AxiosData from './component/axiosdata/AxiosData'
import LineCharts from './component/linechart/LineCharts'
import NavBar from './component/navbar/NavBar'
import PriceOptions from './component/priceOptions/PriceOptions'

function App() {
  

  return (
    <>
      <NavBar></NavBar>
      <PriceOptions></PriceOptions>
      <hr />
      <LineCharts></LineCharts>
      <AxiosData></AxiosData>
     
    </>
  )
}

export default App

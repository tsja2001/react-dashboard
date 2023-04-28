import './App.css'
import ChartDemo from './component/chart-demo'
import ChartTooltip from './component/chart-tooltip'
import DemoComponent from './component/demo'
import DemoScatter from './component/demo-scatter'

function App() {
  return (
    <div>
      <DemoComponent></DemoComponent>
      <ChartDemo></ChartDemo>
      <ChartTooltip></ChartTooltip>
      <DemoScatter></DemoScatter>
      <div className="demo">demo</div>
    </div>
  )
}

export default App

import ReactDOM from 'react-dom/client'
import '@ant-design/charts/dist/index.css'
import '@antv/s2-react/dist/style.min.css'
import { Provider } from 'react-redux'

import './assets/style/index.scss'
import App from './App.jsx'
import store from './store/index.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <div>
    <Provider store={store}>
      <App />
    </Provider>
  </div>
  //</React.StrictMode>
)

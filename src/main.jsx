import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '@ant-design/charts/dist/index.css'
import './assets/style/index.scss'
import { Provider } from 'react-redux'
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

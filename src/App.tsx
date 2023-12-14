import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Compose from './components/compose/Сompose'
import './index.scss'
import { Provider } from 'react-redux'
import store from './store/store'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Compose />
  },
  {
    path: '/category/:categori',
    element: <Compose />
  },
  {
    path: '/category/:categori/subcategory/:subcategori',
    element: <Compose />
  },

])

function App() {

  return (
    <Provider store={store}>
      <div className="wrapper">
        <RouterProvider router={router}>
        </RouterProvider>

      </div>
    </Provider>
  )
}

export default App

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';
import GeneralLayout from './Components/GeneralLayout';
import HomePage from './Pages/HomePage';
import MusicPage from './Pages/MusicPage';
import VideosPage from './Pages/VideosPage';
import ContactPage from './Pages/ContactPage';
import ErrorPage from './Pages/ErrorPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<GeneralLayout />}>
      <Route index element={<HomePage />} />
      <Route path='music' element={<MusicPage />} />
      <Route path='video' element={<VideosPage />} />
      <Route path='contact' element={<ContactPage />} />
      <Route path='*' element={<ErrorPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;

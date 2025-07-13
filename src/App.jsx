import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PopularList from './components/PopularList'; // Importing the PopularList component
import Detail from './components/Detail'; // Importing the Detail component
import NotFound from './components/NotFound'; // Importing the NotFound component

//Sets up your routes using React Router: /: Home route → shows popular movies, /movies/:id: Movie detail, *: Catch-all → shows 404 page
const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<PopularList />} />
      <Route path="/movies/:id" element={<Detail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;


import './App.css';
import NavBar from './components/NavBar';
import NotFound from './components/NotFound';
import NewQuestion from './components/NewQuestion';
import Home from './components/Home';
import Leaderboard from './components/Leaderboard';
import Question from './components/Question';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';


function App() {
  return (
    <Provider store={store}>
    <div className="App">
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='*' element={<NotFound/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/add' element={<NewQuestion/>}/>
      <Route path='/leaderboard' element={<Leaderboard/>}/>
      <Route path='/questions/:id' element={<Question/>}/>
      </Routes>
    </BrowserRouter>
    </div>
    </Provider>
  );
}

export default App;

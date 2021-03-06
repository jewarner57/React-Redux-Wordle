import Game from '../Game';
import './style.css';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import rootReducer from '../../reducers'

function App() {
  const store = createStore(rootReducer);

  return (
    <div className="App">
      <Provider store={store}>
        <h1 className='game-title'>WORDLE</h1>
        <Game />
      </Provider>
    </div>
  );
}

export default App;

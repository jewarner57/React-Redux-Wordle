import Game from '../Game';
import './style.css';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from '../../reducers'

function App() {
  const store = createStore(rootReducer)

  return (
    <div className="App">
      <Provider store={store}>
        <Game />
      </Provider>
    </div>
  );
}

export default App;

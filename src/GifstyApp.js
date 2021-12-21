import './App.css'
import { Search } from './components/Search/Search';
import { AppTitle } from './styles';
function GifstyApp() {
  return (
    <div>
      <AppTitle>Gifsty</AppTitle>
      <Search/>
    </div>
  );
}

export default GifstyApp;

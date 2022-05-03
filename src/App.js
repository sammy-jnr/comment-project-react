import './All.css';
import Inputpanel from './Inputpanel';
import Maincomments from './Maincomments';
import { Commentsprovider } from './Commentscontext';

function App() {
  return (
    <div className="App">
      <Commentsprovider>
        <Maincomments/>
        <Inputpanel/>
      </Commentsprovider>
      
    </div>
  );
}

export default App;

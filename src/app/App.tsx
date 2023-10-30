import { gentlemans } from '../data/repo';
import { Info } from '../info/info';
import { List } from '../list/list';
import { Gentleman } from '../model/genderman';

const title = 'The pointing gentlemen';
const subTitle = 'gentlemen pointing at you';

const list: Gentleman[] = gentlemans;

function App() {
  return (
    <div>
      <Info title={title}></Info>
      <List list={list} subTitle={subTitle}></List>
    </div>
  );
}

export default App;

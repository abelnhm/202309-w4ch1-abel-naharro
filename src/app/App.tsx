import { gentlemans } from '../data/repo';
import { Info } from '../info/info';
import { List } from '../list/list';
import { Gentleman } from '../model/genderman';

const title = 'The pointing gentlemen';
const subTitle = 'gentlemen pointing at you';

const cards: Gentleman[] = gentlemans;

function App() {
  return (
    <div>
      <Info title={title} subTitle={subTitle}></Info>
      <List cards={cards}></List>
    </div>
  );
}

export default App;

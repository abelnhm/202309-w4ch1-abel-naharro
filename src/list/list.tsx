import { useEffect, useState } from 'react';
import { Gentleman } from '../model/genderman';

type Props = {
  list: Gentleman[];
  subTitle: string;
};
export function List({ list, subTitle }: Props) {
  const count = 0;

  const [gentlemans, setGentleman] = useState(list);
  const [countGentleman, setCount] = useState(count);

  const handleClick = () => {
    const genders: Gentleman[] = gentlemans.map((item: Gentleman) => {
      item.selected = true;
      return item;
    });

    setGentleman(genders);
    setCount(genders.length);
  };

  const handleClickGentleman = (ev: SyntheticEvent) => {
    const countMore = countGentleman + 1;
    setCount(countMore);
  };

  useEffect(() => {
    console.log(gentlemans);
  }, [gentlemans]);

  return (
    <>
      <section className="controls">
        <p className="info">
          {countGentleman} {subTitle}
        </p>
        <button className="button button--select" onClick={handleClick}>
          Select all
        </button>
      </section>
      <main className="main">
        <ul className="gentlemen">
          {gentlemans.map((item) => (
            <li className="gentleman" onClick={handleClickGentleman}>
              <div className="gentleman__avatar-container">
                <img
                  className="gentleman__avatar"
                  src={'/' + item.picture}
                  alt={item.alternativeText}
                ></img>
                <span className="gentleman__initial">
                  {item.name.slice(0, 1)}
                </span>
              </div>
              <div className="gentleman__data-container">
                <h2 className="gentleman__name">{item.name}</h2>
                <ul className="gentleman__data-list">
                  <li className="gentleman__data">
                    <span className="gentleman__data-label">Profession:</span>
                    {item.profession}
                  </li>
                  <li className="gentleman__data">
                    <span className="gentleman__data-label">Status:</span>{' '}
                    {item.status}
                  </li>
                  <li className="gentleman__data">
                    <span className="gentleman__data-label">Twitter:</span>{' '}
                    {item.twitter}
                  </li>
                </ul>
              </div>
              {item.selected && (
                <i className="icon gentleman__icon fas fa-check"></i>
              )}

              <i className="icon gentleman__icon gentleman__icon--delete fas fa-times"></i>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

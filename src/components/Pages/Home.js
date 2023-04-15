import { memo, useEffect, useMemo } from 'react';
import Card from '../Card'
import getCardData from '../../functions/getCardData';

const Home = () => {

  const cards = useMemo(() => getCardData(), []);

  useEffect(() => {
    document.title = "Portfolio";
  }, [])

  return (
    <>
      {cards.map((card) => <Card key={card.id} details={card} />)}
    </>
  );
}

export default memo(Home);
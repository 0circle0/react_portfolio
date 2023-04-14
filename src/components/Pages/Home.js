import { memo, useMemo } from 'react';
import Card from '../Card'
import getCardData from '../../functions/getCardData';

const Home = () => {
  document.title = "Portfolio";

  const {
    ReactCard,
    BlazorCard,
    GithubCard,
    WordCard,
    DiceCard,
    SpriteCreatorCard
  } = useMemo(() => getCardData(), []);

  return (
    <>
      <Card Details={SpriteCreatorCard} />
      <Card Details={DiceCard} />
      <Card Details={WordCard} />
      <Card Details={GithubCard} />
      <Card Details={ReactCard} />
      <Card Details={BlazorCard} />
    </>
  );
}

export default memo(Home);
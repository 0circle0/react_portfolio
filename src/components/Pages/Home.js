import { memo, useMemo } from 'react';
import Card from '../Card'
import getCardData from '../../functions/getCardData';

const Home = () => {
  document.title = "Portfolio";

  const {
    reactCard,
    blazorCard,
    githubCard,
    wordCard,
    diceCard,
    spriteCreatorCard
  } = useMemo(() => getCardData(), []);

  return (
    <>
      <Card details={spriteCreatorCard} />
      <Card details={diceCard} />
      <Card details={wordCard} />
      <Card details={githubCard} />
      <Card details={reactCard} />
      <Card details={blazorCard} />
    </>
  );
}

export default memo(Home);
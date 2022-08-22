import { ICatCard } from './CatCard';

const base: ICatCard = {
  tag: 'Felines',
  title: "What's new in cats",
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempor eu metus sed egestas. Pellentesque sed neque non nisi interdum interdum non eget augue.',
  author: 'Alex',
  time: '2h ago',
};

export const mockCatCardProps = {
  base,
};

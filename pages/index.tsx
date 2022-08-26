import { ReactElement } from 'react';
import PrimaryLayout from '../components/layout/primary/PrimaryLayout';
import Search from '../components/utility/search/Search';
import { NextPageWithLayout } from './_app';

const Home: NextPageWithLayout = () => {
  return (
    <section>
      Logo
      <Search />
      Language toggle
    </section>
  );
};

export default Home;

Home.getLayout = (page: ReactElement) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};

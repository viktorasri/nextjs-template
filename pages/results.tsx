import { ReactElement } from 'react';
import PrimaryLayout from '../components/layout/primary/PrimaryLayout';
import SearchResult from '../components/utility/search-result/SearchResult';
import { mockSearchResultProps } from '../components/utility/search-result/SearchResult.mocks';
import { NextPageWithLayout } from './_app';

const Results: NextPageWithLayout = () => {
  return (
    <section className="flex flex-col items-center gap-y-5 mt-12 px-5">
      {[...new Array(6)].map((_, idx) => (
        <SearchResult key={idx} {...mockSearchResultProps.base} />
      ))}
    </section>
  );
};

export default Results;

Results.getLayout = (page: ReactElement) => {
  return <PrimaryLayout justify="items-start">{page}</PrimaryLayout>;
};

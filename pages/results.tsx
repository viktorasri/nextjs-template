import { GetServerSideProps } from 'next';
import { ReactElement } from 'react';
import PrimaryLayout from '../components/layout/primary/PrimaryLayout';
import SearchResult from '../components/utility/search-result/SearchResult';
import { ISearchData } from '../lib/search/types';
import { IApiSearchResponseData } from './api/search';
import { NextPageWithLayout } from './_app';

export interface IResults {
  searchResults: ISearchData[];
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { searchTerm } = query;
  let searchResults: IApiSearchResponseData = [];

  if (searchTerm && searchTerm.length > 0) {
    const res = await fetch(`${process.env.API_HOST}/search`, {
      body: JSON.stringify({ searchTerm }),
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
    });
    searchResults = await res.json();
  }

  return { props: { searchResults } };
};

const Results: NextPageWithLayout<IResults> = ({ searchResults }) => {
  return (
    <section className="flex flex-col items-center gap-y-5 mt-12 px-5">
      {searchResults.map((item, idx) => (
        <SearchResult key={idx} {...item} />
      ))}
    </section>
  );
};

export default Results;

Results.getLayout = (page: ReactElement) => {
  return <PrimaryLayout justify="items-start">{page}</PrimaryLayout>;
};

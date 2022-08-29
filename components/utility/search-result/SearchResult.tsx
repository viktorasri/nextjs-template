import { ISearchData } from 'lib/search/types';
import Link from 'next/link';

export type ISearchResult = React.ComponentPropsWithoutRef<'div'> & ISearchData;

const SearchResult: React.FC<ISearchResult> = ({
  url,
  title,
  text,
  className,
  ...divProps
}) => {
  return (
    <div
      {...divProps}
      className={`flex flex-col max-w-screen-md space-y-1 ${className}`}
    >
      <Link href={url}>
        <a
          className="cursor:pointer hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {url}
        </a>
      </Link>
      <Link href={url}>
        <a
          className="cursor:pointer hover:underline text-blue-600 text-xl"
          target="_blank"
          rel="noopener noreferrer"
        >
          {title}
        </a>
      </Link>
      <p>{text}</p>
    </div>
  );
};

export default SearchResult;

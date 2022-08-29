// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import database from '../../lib/search/database.json';
import { ISearchData } from '../../lib/search/types';

interface IApiSearchRequest extends NextApiRequest {
  body: { searchTerm?: string };
}

export type IApiSearchResponseData = ISearchData[];

export default function handler(
  req: IApiSearchRequest,
  res: NextApiResponse<IApiSearchResponseData>
) {
  const {
    body: { searchTerm },
  } = req;

  if (req.method === 'POST' && searchTerm && searchTerm.length > 0) {
    const searchPatter = new RegExp(searchTerm, 'i');

    const filteredResults = database.filter((item) => {
      return searchPatter.test(item.title) || searchPatter.test(item.text);
    });

    res.status(200).json(filteredResults);
  } else {
    res.status(200).json([]);
  }
}

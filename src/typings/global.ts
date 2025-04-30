import { AxiosRequestConfig } from 'axios';

export interface HotSearchDataItem {
  id: number;
  title: string;
  desc: string;
  author: string;
  timestamp: number;
  hots: number;
  url: string;
}

export type THeaders = AxiosRequestConfig['headers'] & {
  Cookie?: string;
};
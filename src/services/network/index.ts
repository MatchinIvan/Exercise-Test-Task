import axios, {AxiosInstance, AxiosResponse} from 'axios';
import {StringifiableRecord} from 'query-string';
import {stringifyUrl} from 'query-string/base';
import {BASE_URL} from '../../constants';
import {API_KEY} from '@env';

class Network {
  private axiosInstance: AxiosInstance;
  private baseUrl: string;
  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
    this.axiosInstance = axios.create({
      baseURL: baseUrl,
      headers: {
        'X-Api-Key': API_KEY,
      },
    });
  }

  async get<T>(endpoint: string, query: object = {}): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.axiosInstance.get(
        stringifyUrl({
          url: endpoint,
          query: query as StringifiableRecord,
        }),
      );

      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export const NetworkService = new Network(`${BASE_URL}`);

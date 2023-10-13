import axios, {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  isAxiosError,
} from 'axios';
import { BASE_URL } from '../../constants';
import { API_KEY } from '@env';
import {
  CustomStringifiableRecord,
  networkGetPropsTransformer,
} from '../../utils/network';

export interface ApiResponse<T> {
  response: T | null;
  error: Error | null;
}

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

  async get<T>(endpoint: string, query: object = {}): Promise<ApiResponse<T>> {
    try {
      const response: AxiosResponse<T> = await this.axiosInstance.get(
        networkGetPropsTransformer(
          this.baseUrl + endpoint,
          query as CustomStringifiableRecord,
        ),
      );

      return {
        response: response.data,
        error: null,
      };
    } catch (err) {
      const error = err as AxiosError;
      if (isAxiosError(error)) {
        return {
          response: null,
          error,
        };
      }

      throw error;
    }
  }
}

export const NetworkService = new Network(`${BASE_URL}`);

import axios from 'axios';

interface ResponseType {
  data: any;
  status: number;
  statusText: string;
}

export async function httpGet(url: string): Promise<any> {
  const response: ResponseType = await axios.get(url, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.data;
}

export async function httpPost(url: string, body: object): Promise<any> {
  const response: ResponseType = await axios.post(url, body, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.data;
}

export async function httpPut(url: string, body: object): Promise<any> {
  const response: ResponseType = await axios.put(url, body, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.data;
}

export async function httpDelete(url: string): Promise<any> {
  const response: ResponseType = await axios.delete(url, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.data;
}

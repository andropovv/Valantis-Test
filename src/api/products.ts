import axios from 'axios';
import md5 from 'md5';
import getTimestamp from '../utils/getTimestamp';
import { Product } from '../types/products';

const baseUrl = process.env.REACT_APP_API_URL || '';
const password = process.env.REACT_APP_API_PASSWORD;

export async function getIds<T>(offset: number = 0, limit: number = 50): Promise<T> {
    try {
        const config = {
            headers: {
                'X-Auth': md5(`${password}_${getTimestamp()}`),
            },
        };
        const body = { action: 'get_ids', params: { offset: offset, limit: limit } };

        const { data } = await axios.post(baseUrl, body, config);

        return data.result;
    } catch (error: any) {
        console.log(error?.response?.data);
        return await getIds(offset, limit);
    }
}

export async function getItems(ids: string[]): Promise<Product[]> {
    try {
        const config = {
            headers: {
                'X-Auth': md5(`${password}_${getTimestamp()}`),
            },
        };
        const body = { action: 'get_items', params: { ids: ids } };

        const { data } = await axios.post(baseUrl, body, config);

        return data.result;
    } catch (error: any) {
        console.log(error?.response?.data);
        return await getItems(ids);
    }
}

export async function filter(params: {}): Promise<string[]> {
    try {
        const config = {
            headers: {
                'X-Auth': md5(`${password}_${getTimestamp()}`),
            },
        };
        const body = { action: 'filter', params: params };

        const { data } = await axios.post(baseUrl, body, config);

        return data.result;
    } catch (error: any) {
        console.log(error?.response?.data);
        return await filter(params);
    }
}

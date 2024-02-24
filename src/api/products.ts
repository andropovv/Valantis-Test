import axios from 'axios';
import md5 from 'md5';
import getTimestamp from '../utils/getTimestamp';
import { Product } from '../types/products';

const baseUrl = 'http://api.valantis.store:40000';
const password = 'Valantis';

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
    } catch (error) {
        console.log(error);
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
    } catch (error) {
        console.log(error);
        return await getItems(ids);
    }
}

export async function filter(params: {}): Promise<Product[]> {
    try {
        const config = {
            headers: {
                'X-Auth': md5(`${password}_${getTimestamp()}`),
            },
        };
        const body = { action: 'get_items', params: params };

        const { data } = await axios.post(baseUrl, body, config);

        return data.result;
    } catch (error) {
        console.log(error);
        return await filter(params);
    }
}

import restApi from 'services/api';
import EventEntity from 'core/entities/Event/types';
import mapFetchEventListRespone from './utils/mapFetchEventListRespone';

const perPage = 25;
const initialPage = 1;

export const fetchEventList = (): Promise<EventEntity[]> => {
    const url = 'https://api.github.com/events';
    return restApi
        .get(url, {
            params: {
                per_page: perPage,
                page: initialPage,
            },
        })
        .then(mapFetchEventListRespone);
};

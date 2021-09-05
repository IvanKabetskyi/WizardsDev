import {AxiosResponse} from 'axios';
import camelcaseKeys from 'camelcase-keys';
import EventEntity from 'core/entities/Event/types';

export default function (response: AxiosResponse): EventEntity[] {
    const {data} = response;
    return camelcaseKeys(data, {deep: true});
}

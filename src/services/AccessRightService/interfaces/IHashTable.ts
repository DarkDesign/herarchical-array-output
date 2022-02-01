import { AccessRight } from '../../../models';

export interface IHashTable {
    [key: number]: AccessRight;
}
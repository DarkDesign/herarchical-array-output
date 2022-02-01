import { IAccessRightData } from '../services/AccessRightService/interfaces';
import { getRandomInt, getRandomString } from './utils';


function createParents(count: number = 10): readonly IAccessRightData[] {

    const parents: IAccessRightData[] = [];

    for (let id = 1; id <= count; id++) {

        parents.push({
            id,
            parentId: null,
            name: getRandomString(3),
            checked: false
        });

    }

    return parents;

}

function createChildren(
    firstIds: number,
    count: number
): IAccessRightData[] {

    const children: IAccessRightData[] = [];

    for (let id = firstIds+1; id <= firstIds + count; id++) {

        children.push({
            id,
            parentId: getRandomInt(1, firstIds),
            name: getRandomString(3),
            checked: false
        })

    }

    return children;

}


export const AccessRightData: readonly IAccessRightData[] = [
    ...createParents(10),
    ...createChildren(10,10),
    ...createChildren(20,10),
    ...createChildren(30,10),
    ...createChildren(40,10),
    ...createChildren(50,10),
    ...createChildren(60,10),
    ...createChildren(70,10),
    ...createChildren(80,10),

];

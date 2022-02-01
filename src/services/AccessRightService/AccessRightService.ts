import { AccessRightData } from '../../mockdata';
import { AccessRight } from '../../models';
import { IAccessRightData, IHashTable } from './interfaces';


export class AccessRightService {

    public getAccessRight(): readonly AccessRight[] {
        return this.arrayToTree(AccessRightData);
    }



    private arrayToTree(
        data: readonly IAccessRightData[]
    ): readonly AccessRight[] {

        const accessRightByIds: IHashTable = {};
        const roots: AccessRight[] = [];

        for (let index = 0; index < data.length; index++) {

            let currentAccessRight = data[index];

            accessRightByIds[currentAccessRight.id] = new AccessRight(
                currentAccessRight.id,
                currentAccessRight.name,
                AccessRight.getCheckedTypeByBoolean(currentAccessRight.checked)
            );

        }

        for (let index = 0; index < data.length; index++) {

            let currentAccessRight = data[index];

            if (currentAccessRight.parentId !== null) {

                const parent: AccessRight = accessRightByIds[currentAccessRight.parentId];
                const children: AccessRight = accessRightByIds[currentAccessRight.id];

                parent.children.push(children);
                children.parent = parent;

            } else {

                roots.push(accessRightByIds[currentAccessRight.id]);

            }

        }

        return roots;

    }

}
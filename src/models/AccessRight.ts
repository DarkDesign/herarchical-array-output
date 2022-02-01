import { Type } from '../core';


export class AccessRight {

    public constructor(
        public readonly id: number,
        public readonly name: string,
        private _checked: Type.Checked,
        private _parent: AccessRight | null = null,
        private _children: AccessRight[] = [],
    ) {}

    public set parent(value: AccessRight | null) {
        this._parent = value;
    }

    public get children(): AccessRight[] {
        return this._children;
    }

    public get indeterminate(): boolean {
        return this._checked === Type.Checked.Indeterminate;
    }

    public get checked(): boolean {
        return this._checked === Type.Checked.True;
    }

    public set checked(value: boolean) {
        this._checked = AccessRight.getCheckedTypeByBoolean(value);
        this._children.forEach(child => child.childChecked(value));
        this._parent?.calcParentChecked();
    }

    public get type(): Type.Checked {
        return this._checked;
    }



    public childChecked(value: boolean): void {
        this._checked = AccessRight.getCheckedTypeByBoolean(value);
        this._children.forEach(child => child.childChecked(value));
    }

    public calcParentChecked(): void {
        if (this.isDifferentChildren()) this._checked = Type.Checked.Indeterminate;
        else this._checked = this._children[0].type;
        this._parent?.calcParentChecked();
    }



    private isDifferentChildren(): boolean {

        const firstItemType = this._children[0].type;

        for (
            let index = 1;
            index < this._children.length;
            index++
        ) {
            if (this._children[index].type !== firstItemType) return true;
        }

        return false;

    }



    public static getCheckedTypeByBoolean(value: boolean): Type.Checked {
       if (value) return Type.Checked.True;
       else return Type.Checked.False;
    }

}
export interface IAccessRightData {
    readonly id: number;
    readonly parentId: number | null;
    readonly name: string;
    readonly checked: boolean;
}
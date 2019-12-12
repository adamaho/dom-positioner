export interface Position {
    top: number;
    left: number;
}
export interface Region {
    top: number;
    left: number;
    height: number;
    width: number;
}
export declare const getRelativePosition: (anchorElement: HTMLElement, floaterElement: HTMLElement, position: string[], container?: HTMLElement | undefined) => Position;

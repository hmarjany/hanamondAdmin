export enum Brand{
    Ecco
}

export namespace Brand {
    export function values() {
        return Object.keys(Brand).filter(
            (type) => isNaN(<any>type) && type !== 'values'
        );
    }
}
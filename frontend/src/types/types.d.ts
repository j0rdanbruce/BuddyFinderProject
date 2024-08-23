/**
 * Types file.
 */

declare type PetInfo = {
    id: string,
    name: string,
    gender: string,
    age: string,
    size: string,
    primaryBreed: string,
    secondaryBreed?: string,
    photo: string,
}

declare interface PetsProp {
    pets: PetInfo[]
}

declare interface PetProp {
    id: string,
    name: string,
    gender: string,
    age: string,
    size: string,
    primaryBreed: string,
    secondaryBreed?: string,
    photo: string,
}

declare type AdvancedSearch = {
    species?: string,
    gender?: string,
    zipcode?: string,
    miles?: string,
    results?: string
}
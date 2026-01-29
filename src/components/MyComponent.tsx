import type { ReactNode } from "react";

interface TypePeople {
    name: string;
    lastName: string;
    age: number;
}

interface MyComponentProps {
    number: number;
    string: string;
    boolean: boolean;
    object: TypePeople;
    functionProp: () => void;
    array: Array<string | number | boolean>;
    children?: ReactNode;
}

export default function MyComponent({ number, string, boolean, object, functionProp, array, children }: MyComponentProps) {
    functionProp()
    return (
        <>
        <p>Number: {number};</p>
        <p>String: {string};</p>
        <p>Boolean: {boolean ? "На месте" : "Пропал"}</p>
        <p>Object: {object.name} {object.lastName} {object.age}</p>
        <p>Array : {array.map( item => `${item} `)}</p>
        <p>Children: {children}</p>
        <p>Function: Консоль</p>
        </>
    )
}
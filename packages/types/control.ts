import { AbstractControl } from "../control/abstractControl";

export interface IGroupValue {
    [key: string]: any;
}

export type Controls = {
    [key: string]: AbstractControl<any>;
};

export type Errors = {
    [key: string]: any;
};

export type Validator = (value: any) => Errors | null;

export interface IControlBasicParams<T> {
    value: T;
    disabled: boolean;
    validators: Validator[];
}

export interface IFormControlParams {
    value: any;
    disabled?: boolean;
    validators?: Validator[];
}

export interface IFormGroupParams {
    controls: Controls;
    disabled?: boolean;
    validators?: Validator[];
}

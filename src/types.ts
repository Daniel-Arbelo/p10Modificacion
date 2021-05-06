import {Nota} from './pract8/Nota';

export type RequestType = {
    type: 'add' | 'update' | 'remove' | 'read' | 'list';
    title?: string;
    body?:string;
    color?:string;
}

export type ResponseType = {
    type: 'add' | 'update' | 'remove' | 'read' | 'list';
    success: boolean;
    notes?: Nota[];
}
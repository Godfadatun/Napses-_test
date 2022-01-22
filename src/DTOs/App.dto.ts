export interface toDoDTO {
    title: string;
    description: string;
    status: boolean;
    created_at?: string;
}

export type addToDO = ({text, description}: {
    [key: string]: string
}) => void;
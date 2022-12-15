export interface IButtonProps {
    title: string;
    id?: string;
    disabled?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
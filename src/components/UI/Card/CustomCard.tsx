
// export interface CardProps{
//     id:number;
//     title:string;
//     body:string;
//     image:string;
// }

interface Props{
    className?: string;
    display?: string;
    flexDirection?: string;
    alignItems?: string;
    width?:string;
    maxWidth?: string;
    margin?: string;
    maxHeight?:string;
    height?:string;
    minHeight?:string;
}
const CustomCard: React.FC<Props> = ({className, children}) => {
    return(
        <div className={className}>{children}</div>
    );

}
export default CustomCard;
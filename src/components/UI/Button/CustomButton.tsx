interface Props{
    className?: string;
    backgroundColor?:string;
    color?:string;
    onClick?:any
    fontSize?:string;
}
export const CustomButton:React.FC <Props> = ({className, children,onClick}) => {
    return (
       <button onClick={onClick?onClick:()=>{}} className={className}>{children}</button>
    )
}
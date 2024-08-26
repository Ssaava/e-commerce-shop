const Button = ({title, className="bg-warning-400 text-xs text-gray-900 absolute left-4 top-4 "}:{title:string,className?:string})=>{
    return (
        <>
            <button
                className={` ${className} ml-auto z-10 font-bold rounded-sm px-4 py-2`}>{title}
            </button>
        </>
    )
}
export default Button
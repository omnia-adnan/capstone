
export const Card = ({
    title,
    descrpthion,
    url,
}) => {

return (
        <div className="block rounded-lg m-[5px] md:my-4 text-white bg-blue-900 p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
            <h3 className="mb-2 text-xl lg:text-2xl xl:text-4xl font-medium leading-tight">{title}</h3>
            <p className="mb-4 text-base lg:text-lg xl:text-3xl">{descrpthion}</p>
            <a href={url} className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs lg:text-sm xl:text-xl font-medium uppercase 
            leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out 
            hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
            focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
            focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),
            0_4px_18px_0_rgba(59,113,202,0.2)]">Learn more ...</a>
        </div>
    );
};
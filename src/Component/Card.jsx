
export const Card = ({
    title,
    description,
    url,
}) => {

return (
        <div className="block mb-[2%] rounded-2xl text-white bg-blue-900 p-4 2xl:p-14 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
            <h3 className="mb-2 2xl:mb-8 text-lg 2xl:text-7xl font-medium leading-tight">{title}</h3>
            <p className="mb-2 2xl:mb-8 text-sm 2xl:text-5xl">{description}</p>
            <a href={url} className="inline-block rounded bg-primary px-6 py-2 2xl:p-8 text-xs 2xl:text-4xl uppercase 
            leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out 
            hover:bg-blue-800 hover:rotate-2 hover:shadow-[0_5px_10px_4px_rgba(59,113,202),0_4px_18px_0_rgba(59,113,202,0.2)] 
            focus:bg-primary-400 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
            focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),
            0_4px_18px_0_rgba(59,113,202,0.2)]">Learn more ...</a>
            {/* <button type="button" url={url}>Learn more ...</button> */}
        </div>
    );
};
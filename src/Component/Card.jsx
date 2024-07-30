import img3 from "../Images/elephant.webp"

export const Card = ({
    title,
    description,
    url,
}) => {

return (
        <div className="flex h-82 m-[2%] rounded-3xl text-white bg-blue-900 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
            <div className="p-4 3xl:p-14 ">
            <h3 className="mb-2 3xl:mb-8 text-lg 3xl:text-8xl font-medium leading-tight">{title}</h3>
            <p className="mb-2 3xl:mb-8 text-sm 3xl:text-5xl">{description}</p>
            <a href={url} className="inline-block rounded bg-primary px-6 py-2 3xl:p-8 text-xs 3xl:text-4xl uppercase 
            leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out 
            hover:bg-blue-800 hover:rotate-2 hover:shadow-[0_5px_10px_4px_rgba(59,113,202),0_4px_18px_0_rgba(59,113,202,0.2)] 
            focus:bg-primary-400 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
            focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),
            0_4px_18px_0_rgba(59,113,202,0.2)]">Learn more ...</a>
            </div>
            <img src={img3} alt="carcter" class="bg-cover size-[25%] p-1"/>
        </div>
    );
};
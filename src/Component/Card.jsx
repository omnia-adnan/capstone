
export const Card = ({
    title,
    image,
    descrpthion,
    url,
}) => {

return (
        <div className=" bg-emerald-400 ">
            <a href={url} className="flex mt-3 rounded-lg bg-blue-900 h-20 text-base text-white">
        <div className=" w-2/3 h-1/2 rounded-full">
            <img
            className=" size-14 rounded-full ml-2 mt-2"
            src={image || 'https://via.placeholder.com/300x200?text=Card+Image'}
            alt="imge article"
            />
        </div>
        <div className=" p-4 ">
            <h3 className=" text-base">{title}</h3>
            <p>{descrpthion}</p>
        </div>
        </a>
        </div>
    );
};
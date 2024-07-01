
export const Card = ({
    title,
    image,
    descrpthion,
    url,
}) => {

return (
        <div className=" mt-2 md:m-2 lg:w-[800px]">
            <a href={url} className="flex rounded-lg bg-blue-900 h-20 text-base text-white">
        <div className=" w-2/3 h-1/2">
            <img
            className=" size-full rounded-full ml-4 mt-4 lg:mt-3"
            src={image || 'https://via.placeholder.com/300x200?text=Card+Image'}
            alt="imge article"
            />
        </div>
        <div style={{fontSize: '12px', lineHeight: '1.5', marginTop: '8px'}}>
            <h3>{title}</h3>
            <p>{descrpthion}</p>
        </div>
        </a>
        </div>
    );
};
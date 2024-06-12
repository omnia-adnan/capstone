
export const Card = ({
    title,
    image,
    descrpthion,
    url,
}) => {

return (
        <article className=" md:grid md:grid-cols-2">
            <a href={url} className="flex mt-3 rounded-lg bg-blue-900 h-20 text-base text-white">
        <div className=" w-2/3 h-1/2 rounded-full">
            <img
            className=" w-14 h-14 rounded-full"
            src={image || 'https://via.placeholder.com/300x200?text=Card+Image'}
            alt="imge article"
            />
        </div>
        <div className=" mt-2">
            <h3>{title}</h3>
            <p>{descrpthion}</p>
        </div>
        </a>
        </article>
    );
};
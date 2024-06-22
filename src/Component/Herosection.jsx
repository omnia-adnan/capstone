
export const Herosection = (image) => {

return (
        <article className=" md:grid md:grid-cols-2">
        <div className=" w-2/3 h-1/2 rounded-full">
            <img
            className=" w-14 h-14 rounded-full"
            src={image}
            alt="imge article"
            />
        </div>
        </article>
    );
};
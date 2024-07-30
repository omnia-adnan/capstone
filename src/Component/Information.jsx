
export const Information = ({
    description,
}) => {

return (
        <div className="block w-fit m-2 mb-[4%] sm:mb-[2%] h-[calc(100%_-_50%)] text-white p-1 2xl:p-16 ">
            <p className="mb-4 text-lg 2xl:text-7xl 2xl:leading-[2]">{description}</p>
        </div>
    );
};
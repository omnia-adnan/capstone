
export const Information = ({
    description,
}) => {

return (
        <div className="block rounded-3xl mb-[4%] sm:mb-[2%]  h-[calc(100%_-_50%)] text-white bg-blue-900 p-6 2xl:p-16 2xl:rounded-3xl shadow-[0_22px_70px_-13px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
            <p className="mb-4 text-lg 2xl:text-7xl 2xl:leading-[1.5]">{description}
                
            </p>
        </div>
    );
};
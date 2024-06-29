function Registra() {
    return(
        <div className="2xl:block 2xl:ml-auto 2xl:mr-auto 2xl:mt-96 mt-4">
            <div className=" container mx-auto">
                <div className="bg-blue-950 text-white flex flex-col lg:flex-row w-10/12 mx-auto overflow-hidden border-2 border-black rounded-3xl shadow-2xl shadow-lime-400">
                <div className="w-full lg:w-3/5 flex flex-col justify-center items-center p-5 2xl:p-16">
                    <img src="https://cdn.pixabay.com/photo/2024/03/02/18/49/chrysanthemum-8609165_1280.jpg" alt="mom and baby" className="rounded-lg"/>
                    <h1 className="text-3xl 2xl:text-5xl mb-3 2xl:mb-9 mt-2.5 2xl:mt-5">Welcom</h1>
                    <div className="pl-24 2xl:text-3xl">
                        <p>When you use our services, 
                        we understand this responsibility and we work to protect your information. 
                        The reason we collect it is that we create a set of services that will help people</p>
                    </div>
                </div>
                <div className="w-full lg:w-2/5 p-5 2xl:py-16 lg:px-5 2xl:px-60 border-t lg:border-l border-black">
                    <h2 className=" text-3xl 2xl:text-5xl 2xl:mb-4">Regestar</h2>
                    <p className=" mb-4 2xl:text-3xl"> 
                        Create your account it's free and only take a minute
                    </p>
                    <form action="#">
                            <input type="text"
                            required
                            placeholder="your child Name"
                            className="border border-gray-400 2xl:h-12 py-1 px-4 w-full rounded-3xl"
                            />
                            <input type="number"
                            required
                            placeholder="your child Age"
                            className="border border-gray-400 2xl:h-12 py-1 px-4 w-full mt-2.5 2xl:mt-5 rounded-3xl"
                            />
                            <input type="email"
                            required
                            placeholder="text"
                            className="border border-gray-400 2xl:h-12 py-1 px-4 w-full mt-2.5 2xl:mt-5 rounded-3xl"
                            />
                            <input type="password"
                            required
                            placeholder="password"
                            className="border border-gray-400 2xl:h-12 py-1 px-4 w-full mt-2.5 2xl:mt-5 rounded-3xl"
                            />
                            <input type="number"
                            required
                            placeholder="your child Weight"
                            className="border border-gray-400 2xl:h-12 py-1 px-4 w-full mt-2.5 2xl:mt-5 rounded-3xl"
                            />
                            <input type="number"
                            required
                            placeholder="your child Height"
                            className="border border-gray-400 2xl:h-12 py-1 px-4 w-full mt-2.5 2xl:mt-5 rounded-3xl"
                            />
                            <select className="border border-gray-400 2xl:h-12 py-1 px-4 w-full mt-2.5 2xl:mt-5 rounded-3xl text-black">
                                <option value="">Your child Gander</option>
                                <option value="male">male</option>
                                <option value="female">female</option>
                            </select>
                            <button type="submit" className="w-full bg-lime-400 2xl:h-12 py-1 text-center shadow-md shadow-lime-400 border border-black rounded-3xl mt-6 text-black">Registra</button>
                    </form>
                </div>
                </div>
            </div>
        </div>
    );
}
export default Registra;
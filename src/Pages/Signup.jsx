function Signup() {
    return(
        <div className=" text-center 2xl:text-7xl">
            <form>
                <input type="text"
                name="name" 
                id="name" 
                required
                placeholder=""
                />
            </form>
        </div>
    );
}
export default Signup;
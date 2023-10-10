const TopPart = () => {
  return (
    <>
      <div className="bg-gudgames w-full h-full">
        {/* Your content goes here */}
        <div className="flex flex-col justify-center items-center h-[50rem]">
          <div className="flex flex-col justify-center items-center bg-[#181A21] bg-opacity-90 rounded-xl w-[40%] p-5 m-5">
            <h1 className="text-xl font-bold mb-5">Login with Username</h1>
            <input
              type="text"
              placeholder="Username"
              className="input mb-5 w-[50%] hover:shadow-lg"
            />
            <input
              type="text"
              placeholder="Password"
              className="input w-[50%] hover:shadow-lg"
            />
            <div className="flex flex-row">
            <label className="label cursor-pointer mb-5">
              <input
                type="checkbox"
                checked="false"
                className="checkbox checkbox-xs"
              />
              <span className="label-text"> &nbsp;Remember me </span>
            </label>
            <span className="link link-hover ml-[160px]">Forgot Password?</span>
            </div>
            <button type="submit" className="btn btn-success mb-5 w-48">
              Login
            </button>
            <button type="button" className="btn btn-primary w-48">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopPart;

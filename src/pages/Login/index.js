import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../utilities/authContext";
import { useNavigate } from "react-router-dom";

function LoginRoute() {
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  const [emailInp, setEmailInp] = useState("");
  let navigate = useNavigate();

  useEffect(() => {
    if (currentUser != null) {
      navigate("/");
    }
  }, []);

  const onSign = () => {
    const user = {
      email: emailInp,
      isAdmin: false,
    };
    setCurrentUser(user);
    localStorage.setItem("banana", JSON.stringify(user));
    navigate("/");
  };

  return (
    <div className="flex min-h-screen justify-center items-center">
      <section className=" bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-lg mx-auto">
            <div className="text-center mb-8">
              <a className="inline-block mx-auto mb-6" href="#">
                <img src="nigodo-assets/logo-icon-nigodo.svg" alt="" />
              </a>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-2">
                Sign in
              </h2>
            </div>
            <form>
              <div className="mb-6">
                <label className="block mb-2 font-extrabold" for="">
                  Email
                </label>
                <input
                  value={emailInp}
                  onChange={(e) => setEmailInp(e.target.value)}
                  className="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded"
                  type="email"
                  placeholder="email"
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2 font-extrabold" for="">
                  Password
                </label>
                <input
                  className="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded"
                  type="password"
                  placeholder="**********"
                />
              </div>
              <div className="flex flex-wrap -mx-4 mb-6 items-center justify-between">
                <div className="w-full lg:w-auto px-4 mb-4 lg:mb-0">
                  <label for="">
                    <input type="checkbox" />
                    <span className="ml-1 font-extrabold">Remember me</span>
                  </label>
                </div>
                <div className="w-full lg:w-auto px-4">
                  <a
                    className="inline-block font-extrabold hover:underline"
                    href="#"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>
              <button
                onClick={onSign}
                className="inline-block w-full py-4 px-6 mb-6 text-center text-lg leading-6 text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200"
              >
                Sign in
              </button>
              <p className="text-center font-extrabold">
                Don&rsquo;t have an account?{" "}
                <a className="text-red-500 hover:underline" href="#">
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LoginRoute;

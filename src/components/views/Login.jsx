import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <div className="hero min-h-screen bg-indigo-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <Link to="/" className="label-text-alt link link-hover">
                    Forgot password?
                  </Link>
                </label>
              </div>
              <div className="flex flex-col w-full border-opacity-50">
                <div className="form-control mt-6">
                  <button className="btn btn-primary text-white">Login</button>
                </div>
                <div className="divider">OR</div>
                <div className="form-control">
                  <button className="btn btn-error text-white">
                    Login With Office 365
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

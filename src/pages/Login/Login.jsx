import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useLocation,useNavigate   } from "react-router-dom";

const Login = () => {
    const {signIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate()
    const handleForm = e =>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        
        const email = form.get('email');
        const password = form.get('password');

        signIn(email,password)
        .then(res=>{
            console.log(res.user);

            navigate(location?.state ? location.state : '/');
        })
        .catch(err=>{
            console.log(err.message)
        })

        console.log(email,password);
    }
  return (
    <div>
      <Navbar></Navbar>
      <div className="hero min-h-screen bg-base-200"> 
        <div className="hero-content flex-col ">
        <h2 className="text-4xl">Login</h2>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleForm} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
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
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p className="p-4">New in dragon news? <Link to='/register'> <button className="btn-link">Register</button> </Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

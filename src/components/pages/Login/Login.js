import React, { useState } from "react";
import Bradcaump from "../../sectionbg/Bradcaump";
import "./Login.css";

const Login = () => {
  const [active, setactive] = useState(0);

  const navItems = [
    {
      title: "login",
    },
    {
      title: "register",
    },
  ];
  return (
    <div>
      <Bradcaump heading={"Login-Register"} />
      <div className="login-register">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-8 col-sm-10 m-auto">
              <div className="account-nav text-center">
                {navItems.map((item, index) => (
                  <div
                    className={
                      active === index ? "nav-item active" : "nav-item"
                    }
                    key={index}
                  >
                    <a
                      href="/"
                      onClick={(e) => {
                        e.preventDefault();
                        setactive(index);
                      }}
                    >
                      {item.title}
                    </a>
                  </div>
                ))}
              </div>
              <div className="tab-pane">
                <div
                  className={active === 0 ? "login-form active" : "login-form"}
                >
                  {active === 0 && (
                    <form action="">
                      <label htmlFor="email">Email Address</label>
                      <input type="email" name="email" id="email" />
                      <label htmlFor="password">Password</label>
                      <input type="password" name="password" id="password" />
                      <a href="/" className="forget-pass">
                        forget password ?
                      </a>
                      <button type="button" className="login-btn">
                        Login
                      </button>
                    </form>
                  )}
                </div>

                <div
                  className={
                    active === 1 ? "register-form active" : "register-form"
                  }
                >
                  {active === 1 && (
                    <form action="">
                      <label htmlFor="fname">First Name</label>
                      <input type="text" name="fname" id="fname" />
                      <label htmlFor="lname">Last Name</label>
                      <input type="text" name="lname" id="lname" />
                      <label htmlFor="email">Email Address</label>
                      <input type="email" name="email" id="email" />
                      <label htmlFor="pass">Password</label>
                      <input type="password" name="pass" id="pass" />
                      <button type="button" className="register-btn">
                        register
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React, { useState } from "react";
import Layout from "../../components/Layout";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
//import Input from "../../components/UI/Input";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signup } from "../../actions";
import { useEffect } from "react";
import '../../index.css';

/**
 * @function Signup
 **/

const Signup = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const auth = useSelector((state) => state.auth);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user.loading) {
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
    }
  }, [user.loading]);

  const userSignup = (e) => {
    e.preventDefault();

    const user = {
      firstName,
      lastName,
      email,
      password,
    };

    dispatch(signup(user));
  };

  if (auth.authenticate) {
    return <Redirect to={`/`} />;
  }

  if (user.loading) {
    return <p>Loading...!</p>;
  }

  return (
    <Layout>
      <Container>
        {user.message}
        <Row style={{ marginTop: "100px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            {/*<Form onSubmit={userSignup}>
              <Row>
                <Col md={6}>
                  <Input
                    label="First Name"
                    placeholder="First Name"
                    value={firstName}
                    type="text"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </Col>
                <Col md={6}>
                  <Input
                    label="Last Name"
                    placeholder="Last Name"
                    value={lastName}
                    type="text"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </Col>
              </Row>

              <Input
                label="Email"
                placeholder="Email"
                value={email}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />

              <Input
                label="Password"
                placeholder="Password"
                value={password}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form> */}
            <form onSubmit={userSignup}>
              <h3>Sign Up</h3>
              <div className="form-group">
                <label>First name</label>
                <input type="text" value={firstName} className="form-control" placeholder="First name" onChange={(e) => setFirstName(e.target.value)} />
              </div>
              <div className="form-group">
                <label>Last name</label>
                <input type="text" value={lastName} className="form-control" placeholder="Last name" onChange={(e) => setLastName(e.target.value)} />
              </div>
              <div className="form-group">
                <label>Email address</label>
                <input type="email" value={email} className="form-control" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" value={password} className="form-control" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} />
              </div>
              <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
              <p className="forgot-password text-right">
                Already registered <a href="#"><NavLink to="signin">
                  sign in?
                </NavLink></a>
              </p>
            </form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Signup;
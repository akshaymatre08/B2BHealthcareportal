import React, { useState, useEffect, Component } from 'react';
import Layout from '../../components/Layout';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
//import Input from '../../components/UI/Input';
import { login } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import '../../index.css';
/**
* @function Signin
**/

const Signin = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const auth = useSelector(state => state.auth);

    const dispatch = useDispatch();

    


    const userLogin = (e) => {

        e.preventDefault();

        const user = {
            email, password
        }

        dispatch(login(user));
    }

    if(auth.authenticate){
        return <Redirect to={`/`} />
    }

    return (
        <Layout>
            <Container>
                {/*<Row style={{ marginTop: '50px' }}>
                    <Col md={{span: 6, offset: 3}}>
                        <Form onSubmit={userLogin}>
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
                        </Form>
                    </Col>
                </Row> */}
                <Row style={{ marginTop: '120px' }}>
                <Col md={{span: 6, offset: 3}}>
                <form onSubmit={userLogin}>
                <h3>Sign In</h3>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" value={email} className="form-control" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" value={password} className="form-control" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
            </Col>
            </Row>
                
            </Container>
        </Layout>
    )

}
export default Signin
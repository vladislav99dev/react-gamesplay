import { useNavigate,Link } from "react-router-dom";
import * as userRequster from '../services/userServices'
const Register = () => {
    const navigate = useNavigate()


    const registerHandler = (event) => {
        event.preventDefault();
        const formData  = new FormData(event.target);
        const data = Object.fromEntries(formData);

        if(data['password'] === data['confirm-password']){
            userRequster.register(data)
            .then((res) => {
                navigate('/users/login')
            })
            .catch((err)=> {
                console.log(err);
            })
        }

    }


    return(
        <section id="register-page" className="content auth">
            <form id="register" onSubmit={registerHandler}>
                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Register</h1>

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="maria@email.com"/>

                    <label htmlFor="pass">Password:</label>
                    <input type="password" name="password" id="register-password"/>

                    <label htmlFor="con-pass">Confirm Password:</label>
                    <input type="password" name="confirm-password" id="confirm-password"/>

                    <input className="btn submit" type="submit" />

                    <p className="field">
                        <span>If you already have profile click <Link to="/users/login">here</Link></span>
                    </p>
                </div>
            </form>
        </section>
    );
}


export default Register
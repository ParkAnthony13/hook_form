import React, { useState } from 'react';
import styles from './Form.module.css';


const Form = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordc, setPasswordc] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname, lastname, email, password, passwordc };
        console.log("Welcome", newUser);
    };

    return(
        <div className={ styles.container }>
            <form action="">
                <div className={ styles.info }>
                    <label>First Name: </label>
                    <input type="text" onChange={ (e) => setFirstname(e.target.value) } value={firstname} />
                </div>
                <div className={ styles.info }>
                    <label>Last Name: </label>
                    <input type="text" onChange={ (e) => setLastname(e.target.value) } value={lastname} />
                </div>
                <div className={ styles.info }>
                    <label>Email: </label>
                    <input type="text" onChange={ (e) => setEmail(e.target.value) } value={email} />
                </div>
                <div className={ styles.info }>
                    <label>Password: </label>
                    <input type="text" onChange={ (e) => setPassword(e.target.value) } value={password} />
                </div>
                <div className={ styles.info }>
                    <label>Confirm Password: </label>
                    <input type="text" onChange={ (e) => setPasswordc(e.target.value) } value={passwordc} />
                </div>
            </form>
            <div className={ styles.output }>
                <p className={ styles.outputTitle }>Your Form Data</p>
                <table>
                    <tr>
                        <td className={ styles.label }>First Name</td>
                        <td>{firstname}</td>
                    </tr>
                    <tr>
                        <td className={ styles.label }>Last Name</td>
                        <td>{lastname}</td>
                    </tr>
                    <tr>
                        <td className={ styles.label }>Email</td>
                        <td>{email}</td>
                    </tr>
                    <tr>
                        <td className={ styles.label }>Password</td>
                        <td>{password}</td>
                    </tr>
                    <tr>
                        <td className={ styles.label }>Confirm Password</td>
                        <td>{passwordc}</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}


export default Form;
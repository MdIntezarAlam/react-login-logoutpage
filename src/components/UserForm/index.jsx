import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { errorMessages, messages, PAGE_PATHS } from '../../utils/constants';
import { validateFormData } from '../../validations/FormDataValidation';
import InputElement from '../InputElement';
const { accountExists, accountNotExists, accountRegistered, wrongCredentials, loggedIn } = messages;
const defaultValues = {
    name: "",
    email: "",
    password: "",
}
const defaultErrors = {
    name: "",
    email: "",
    password: "",
}

function UserForm({ register }) {
    const navigate = useNavigate()
    if (!register) {
        delete defaultValues.name;
        delete defaultErrors.name;
    }
    const [formData, setFormData] = useState(defaultValues)
    const [errors, setErrors] = useState(defaultErrors)

    const handleChange = (e) => {
        const { value, name } = e.target;
        setFormData({ ...formData, [name]: value });
        if (value === "") {
            setErrors({ ...errors, [name]: errorMessages[name] })
        } else {
            setErrors({ ...errors, [name]: '' })
        }
    }

    const Alert = (message = '') => {
        window.alert(message)
    }

    const reset = () => {
        setErrors(defaultErrors)
        setFormData(defaultValues)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("===> typeof : ", typeof formData)
        const { validated, errors: newErrors } = validateFormData(formData);
        if (validated) {
            
            const usersInLocalStorage = JSON.parse(localStorage.getItem('users')) || [];
            const existingData = usersInLocalStorage.find(obj => obj.email === formData.email );
            if(register) {
                if(existingData) {
                    return Alert(accountExists)
                }
                usersInLocalStorage.push(formData)
                localStorage.setItem("users",JSON.stringify(usersInLocalStorage));
                reset();
                return Alert(accountRegistered)
            }
            if(!existingData) {
                return Alert(accountNotExists)
            }
            if(existingData.password !== formData.password) {
             return Alert(wrongCredentials)
            }
            localStorage.setItem("loggedInUser", JSON.stringify(existingData));
            Alert(loggedIn);
            setTimeout(() => { navigate(PAGE_PATHS.dashboard) }, 2000);

        } else {
            setErrors(newErrors || {})
        }
    }


    return (
        <div className="form__container">
            <form className="form__box" onSubmit={handleSubmit}>
                <h2 className='reg_heading'>{register ? "Register" : "Login"}</h2>
                {register && <InputElement name="name" placeholder="enter user name"
                    value={formData.name} error={errors.name} onChange={handleChange} />}

                <InputElement name="email" placeholder="enter user email"
                    value={formData.email} error={errors.email} onChange={handleChange} />

                <InputElement name="password" placeholder="enter user password"
                    value={formData.password} error={errors.password} onChange={handleChange} />
                 <p className='already_have_an_account login'>already have an <a href="/login">Account?</a></p>
                <button type="submit" className='reg_submit' >Register</button>
            </form>
        </div>
    )
}
export default UserForm

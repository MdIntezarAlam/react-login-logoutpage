import { errorMessages } from "../utils/constants";

export const validateFormData = (formData = {}) => {
    let validated = true;
    const errors = {};
    Object.keys(formData).forEach(key => {
        if (formData[key] === "") {
            validated = false;
            errors[key] = errorMessages[key]
        }
    });
    return { validated, errors }
}
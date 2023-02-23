import axios from "axios"

export const validateLogin = async(values) => {
    const configAPI = 'http://localhost:3000/claimtoken'
    const { data } = await axios.post(configAPI, { data: values }, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });
    return data
}
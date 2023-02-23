export const validateLogin = async(data) => {
    const configAPI = 'http://localhost:3000/claimtoken'
    fetch(configAPI)
        .then(res => res.json())
        .then(data => console.log(data));
}
const checkForAccess = async () => {
    try {
        let res = await fetch('https://mtunes-backend.herokuapp.com/user/checkForAccess', { method: 'GET', credentials: 'include' })
        res = await res.json()
        console.log(res)
        if (res.message === "#NoTokenNoEntry") {
            console.log("Token is not there")
            // window.alert('No token generated!!! Authentication gone wrong')
            window.location.replace('/login')
        }
        else if (res.message === "#FailedToParseToken") {
            window.location.replace('/login')
        } else if (res.message === "#Success") {
            // window.location.replace('/home')
        }
    } catch (e) {
        console.log("Error here", e)
    }
}
export default checkForAccess
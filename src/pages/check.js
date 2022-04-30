
export async function checkForAccess() {
    try {
        let res = await fetch('http://localhost:4040/user/checkForAccess', { method: 'GET', credentials: 'include' })
        res = await res.json()
        console.log(res)
        // setLoader(false)
        if (res.message === "#NoTokenNoEntry") {
            window.alert('No token generated!!! Authentication gone wrong')
            window.location.replace('/login')
        }
        else if (res.message === "#FailedToParseToken") {
            window.location.replace('/login')

        }
        else if (res.message === "#Success") {
            window.location.replace('/home')
        }
    } catch (e) {
        console.log("Error here", e)
    }
}


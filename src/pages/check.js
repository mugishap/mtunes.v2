
export async function checkForAccess() {
    try {
        let res = await fetch('https://mtunes-backend.herokuapp.com/user/checkForAccess', {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify({
                token: (localStorage.getItem('token'))
            })
        })
        res = await res.json()
        console.log(res)
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


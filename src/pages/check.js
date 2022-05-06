
export async function checkForAccess() {
    try {
        let res = await fetch('http://localhost:4040/user/checkForAccess', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({
                token: (localStorage.getItem('token'))
            })
        })
        res = await res.json()
        if (res.message === "#NoTokenNoEntry") {
            window.alert('No token generated!!! Authentication gone wrong')
            window.location.replace('/login')
        }
        else if (res.message === "#FailedToParseToken") {
            window.alert('Error in parsing token')
            window.location.replace('/login')
        }
        else if (res.message === "#Success") {
            localStorage.setItem('userInfo',JSON.stringify(res.userInfo.user))
            // window.location.replace('/home')
        }
    } catch (e) {
        console.log("Error here", e)
    }
}


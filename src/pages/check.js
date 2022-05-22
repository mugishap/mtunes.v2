export async function checkForAccess() {
  try {
    localStorage.getItem("mTunesUserProfile") && localStorage.getItem("mTunesToken")
      ? console.log()
      : window.location.replace("/login");
  } catch (e) {
    console.log("Error here", e);
  }
}

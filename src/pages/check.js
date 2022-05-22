export async function checkForAccess() {
  try {
    localStorage.getItem("mTunesUserProfile")
      ? console.log("Allowed to continue")
      : window.location.replace("/login");
  } catch (e) {
    console.log("Error here", e);
  }
}

window.addEventListener('DOMContentLoaded', () => {
    displayProfile();
});

async function displayProfile() {
    const container = document.getElementById('profileContent');
    container.innerHTML = '';
    const github = await fetch('https://api.github.com/users/FictionalDuck')
    const result = await github.json();
    const profile = document.createElement('div');
    profile.innerHTML = `
            <img id="profilePicture" src="${result.avatar_url}" width="450" height="450">
            <br>
            <div id="profileCard">
			    <h1><a id="profileUsername" href="${result.html_url}" target="_blank">${result.login}</a></h1>
			    <p id="profileBio" >${result.bio}</p>
            </div>
		`;
    container.appendChild(profile);
}
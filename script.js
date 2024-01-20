const userInput = document.getElementById("userName");
const getDetails = document.getElementById("getDetails");
const profileInfo = document.getElementById("ProfileInfo");
const repoInfo = document.getElementById("repoInfo");

getDetails.addEventListener("click", async () => {
  const username = userInput.value;
  //console.log(userName);

  const res = await fetch(`https://api.github.com/users/${username}`);
  const datas = await res.json();
  //console.log(data)

  getprofileinfo(datas);
  getrepoinfo(username);
});

function getprofileinfo(abc) {
  //console.log(abc);
  profileInfo.innerHTML = `<div class="card" id="cde">
    <div class="card-img">
    <img src=${abc.avatar_url} alt=${abc.username}>
    </div>
    <div class="card-body>
    <div class="card-title" id="abc">${abc.name}</div>
    <div class="card-subheading">${abc.login}</div>
    <div class="card-text">
    <p>${abc.bio}</p>
    <p><i class="fa-solid fa-user-group"></i> ${abc.followers} followers ${abc.following} following</p>
    <p><i class="fa-solid fa-location-dot"></i> ${abc.location}</p>
    <button>
    <a href=${abc.html_url} target="_blank">visit profile</a>
    </button>
    </div>
    </div>
    </div>`;
}

async function getrepoinfo(username) {
  const res = await fetch(`https://api.github.com/users/${username}/repos`);
  const pro = await res.json();
  for (let i = 0; i < pro.length; i++) {
    repoInfo.innerHTML += `<div class="card" id="cde">
        <div class="card-body>"
        <div class="card-title" id="abc">${pro[i].name}</div>
        <div class="card-subheading">${pro[i].language}</div>
        <div class="card-text">
        <button>
        <a href=${pro[i].html_url} target="_blank">visit repo</a>
        </button>
        </div>
        </div>
        </div>`;
  }
}

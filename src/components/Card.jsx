
//TO-DO:
// build skeleton for: 
// image, count for followers, following, # of repos,
// top 5 repos
// get github api and render it to card. Hide api source! 
//  need
// user_url, followers_url, following_url, user_repositories_url, user_repositories_url

import { SetStateAction, useEffect, useState } from "react";

function RepoList({ repos }) {
  return (
    <ul className="flex w-max space-x-8 justify-between">
      {repos.map((repo, index) => (
        <li key={index}>{repo.name}</li>
      ))}
    </ul>
  );
}

export default function Card() {
  const [userData, setUserData] = useState(null);
  const [userRepos, setUserRepos] = useState([])

  useEffect(() => {
    const username = 'bradtraversy'; // replace with the actual username
    fetch(`https://api.github.com/users/${username}`)
      .then(response => response.json())
      .then(data => setUserData(data));

    fetch(`https://api.github.com/users/${username}/repos`)
      .then(response => response.json())
      .then(data => setUserRepos(data));
  }, []);

  console.log(userData)

  return (
    <>
      { userData &&
        <div className=" container flex flex-col items-center justify-center mt-6">
          <img src= {userData.avatar_url} alt={userData.login}
          className=" h-32 rounded-full object-cover"
          ></img> 
          <div className=" pt-2">{userData.login}</div>
        <div className="flex flex-col items-center justify-center">
          <div className="pt-5">
            <ul className=" flex flex-row w-max justify-center space-x-6">
              <li>{userData.followers} followers</li>
              <li>{userData.following} following</li>
              <li>{userData.public_repos} public repos</li>
            </ul>
          <div className="top-repos">
            <ul className="flex w-max space-x-8 justify-between">
              <RepoList repos={userRepos.slice(0,5)} />
            </ul>
          </div>
          </div>
        </div>
      </div>
      }

    </>
  )
}


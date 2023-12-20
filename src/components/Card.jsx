import { useEffect, useState } from "react";
import Search from "./Search";

function RepoList({ repos }) {
  return (
    <ul className="flex w-max space-x-8 justify-between">
      {repos.map((repo, index) => (
        <li key={index}>{repo.name}</li>
      ))}
    </ul>
  );
}


// TO-DO: 
// add search here
// username value is when submit button is clicked


function UserProfile({ userData, userRepos }) {
  return (
    <div className='bg-orange-400'>
      <Search />
      {userData && (
        <div className="container flex flex-col items-center justify-center mt-6">
          <img
            src={userData.avatar_url}
            alt={userData.login}
            className="h-32 rounded-full object-cover"
          />
          <div className="pt-2">{userData.login}</div>
          <div className="flex flex-col items-center justify-center">
            <div className="pt-5">
              <ul className="flex flex-row w-max justify-center space-x-6">
                <li>{userData.followers} followers</li>
                <li>{userData.following} following</li>
                <li>{userData.public_repos} public repos</li>
              </ul>
            </div>
            <div className="top-repos">
              <ul className="flex w-max space-x-8 justify-between">
                <RepoList repos={userRepos.slice(0, 5)} />
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserProfile;


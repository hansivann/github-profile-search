
//TO-DO:
// build skeleton for: 
// image, count for followers, following, # of repos,
// top 5 repos
// get github api and render it to card. Hide api source! 
//  need
// user_url, followers_url, following_url, user_repositories_url, user_repositories_url

import { useEffect, useState } from "react";
import {getSource} from '../api/script.js'

export default function Card() {
  const [userData, setUserData] = useState(null);

  console.log(userData)

  useEffect(() => {
      getSource('bradtraversy').then(data => setUserData(data))
  }, [])

  return (
    <>
      { userData &&
        <div className="flex flex-col items-center justify-center mt-6">
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
              <li>repo 1</li>
              <li>repo 2</li>
              <li>repo 3</li>
            </ul>
          </div>
          </div>
        </div>
      </div>
      }

{/* {userData && (
        <div className="flex flex-col items-center justify-center mt-6">
          <div>{userData.avatar_url}
            {userData.login}</div>
          <div className="links">
            <ul className="flex flex-row w-max justify-center space-x-6">
              <li>{userData.followers} followers</li>
              <li>{userData.following} following</li>
            </ul>
          </div>
        </div>
      )} */}
    </>
  )
}


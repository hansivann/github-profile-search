import { useEffect, useState } from "react";

function Search({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(query);
  }
  
  return (
    <form
      className='flex flex-col items-center justify-center mt-5'
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        value={query} 
        onChange={handleQueryChange}
        id='search'
        placeholder="GitHub User"
        className="text-center border border-gray-300 rounded py-2 px-4"
      />
      <button
        type='submit'
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
      >
        Submit
      </button>
    </form>
  );
}

function RepoList({ username }) {
  const [userRepos, setUserRepos] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos`)
      .then(response => response.json())
      .then(data => setUserRepos(data));
  }, [username]);

  return (
    <ul className="flex w-max space-x-8 justify-between">
      {userRepos.map((repo, index) => (
        <li key={index}>{repo.name}</li>
      ))}
    </ul>
  );
}

function Card() {
  const [userData, setUserData] = useState(null);
  const [userRepos, setUserRepos] = useState([]);
  const [username, setUsername] = useState('');

  const handleSearchSubmit = (query) => {
    fetch(`https://api.github.com/search/users?q=${query}`)
      .then(response => response.json())
      .then(data => {
        const { login, avatar_url, followers, following, public_repos } = data.items[0];
        setUserData({ login, avatar_url, followers, following, public_repos });
        setUsername(login);
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <div>
      <Search onSubmit={handleSearchSubmit} />
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
                <RepoList username={username} />
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Card;





// import { useEffect, useState } from "react";
// // import Search from "./Search";

// function Search() {
//   const [query, setQuery] = useState('');

//   const handleQueryChange = (event) => {
//     setQuery(event.target.value);
//   }

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     fetch(`https://api.github.com/search/users?q=${query}`)
//       .then(response => response.json())
//       .then(data => {
//         console.log(data.items[0])
//         //need: login, avatar_url, followers, following, repos
//         const {login, avatar_url, followers_url, following_url, repos_url} = data.items[0];

//         console.log(login, avatar_url, followers_url, following_url, repos_url)
//       })
//       .catch(error => {
//         console.log(error);

//       })
//   }
  
//   return(
//     <>
//       <form
//         className='flex flex-col items-center justify-center mt-5 '
//         onSubmit={handleSubmit}
//       >
//           <input
//           type="text"
//           value={query} 
//           onChange={handleQueryChange}
//           id='search'
//           placeholder="GitHub User"
//           className="text-center"
//           ></input>
//           <button type='submit'
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//           >Submit</button>
//       </form>
//     </>
//   )
// }

// function RepoList({ repos }) {

//   fetch(`https://api.github.com/users/${username}/repos`)
//   .then(response => response.json())
//   .then(data => setUserRepos(data));
  

//   return (
//     <ul className="flex w-max space-x-8 justify-between">
//       {repos.map((repo, index) => (
//         <li key={index}>{repo.name}</li>
//       ))}
//     </ul>
//   );
// }

// //   useEffect(() => {
// //   const username = 'bradtraversy'; // replace with the actual username
// //   fetch(`https://api.github.com/users/${username}`)
// //     .then(response => response.json())
// //     .then(data => setUserData(data));

// //   fetch(`https://api.github.com/users/${username}/repos`)
// //     .then(response => response.json())
// //     .then(data => setUserRepos(data));
// // }, [username]);
// // console.log(userData)


// // TO-DO: 
// // add search here
// // username value is when submit button is clicked


// function Card({ userData, userRepos }) {
//   return (
//     <div className=''>
//       <Search />
//       {userData && (
//         <div className="container flex flex-col items-center justify-center mt-6">
//           <img
//             src={userData.avatar_url}
//             alt={userData.login}
//             className="h-32 rounded-full object-cover"
//           />
//           <div className="pt-2">{userData.login}</div>
//           <div className="flex flex-col items-center justify-center">
//             <div className="pt-5">
//               <ul className="flex flex-row w-max justify-center space-x-6">
//                 <li>{userData.followers} followers</li>
//                 <li>{userData.following} following</li>
//                 <li>{userData.public_repos} public repos</li>
//               </ul>
//             </div>
//             <div className="top-repos">
//               <ul className="flex w-max space-x-8 justify-between">
//                 <RepoList repos={userRepos.slice(0, 5)} />
//               </ul>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Card;


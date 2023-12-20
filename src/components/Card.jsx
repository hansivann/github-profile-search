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
        setUserData(null);
        setUsername('');
      });
  }

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="p-8">
        <Search onSubmit={handleSearchSubmit} />
      </div>
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          {userData && (
            <img
              src={userData.avatar_url}
              alt={userData.login}
              className="h-32 w-32 rounded-full object-cover"
            />
          )}
        </div>
        <div className="p-8">
          {userData && (
            <div>
              <div className="text-xl font-medium">{userData.login}</div>
              <div className="flex flex-col items-center justify-center mt-5">
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
          )}
          {!userData && (
            <p className="text-red-500">User not found</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
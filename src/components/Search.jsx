

// fetch:

import { useState } from "react";

//   useEffect(() => {
//   const username = 'bradtraversy'; // replace with the actual username
//   fetch(`https://api.github.com/users/${username}`)
//     .then(response => response.json())
//     .then(data => setUserData(data));

//   fetch(`https://api.github.com/users/${username}/repos`)
//     .then(response => response.json())
//     .then(data => setUserRepos(data));
// }, [username]);
// console.log(userData)



function Search() {
  const [query, setQuery] = useState('');

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`https://api.github.com/search/users?q=${query}`)
      .then(response => response.json())
      .then(data => {
        console.log(data.items[0])
        //need: login, avatar_url, followers, following, repos
        const {login, avatar_url, followers_url, following_url, repos_url} = data.items[0];

        console.log(login, avatar_url, followers_url, following_url, repos_url)
      })
      .catch(error => {
        console.log(error);

      })
  }
  
  return(
    <>
      <form
        className='flex flex-col items-center justify-center mt-5 '
        onSubmit={handleSubmit}
      >
          <input
          type="text"
          value={query} 
          onChange={handleQueryChange}
          id='search'
          placeholder="GitHub User"
          className="text-center"
          ></input>
          <button type='submit'
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >Submit</button>
      </form>
    </>
  )
}

export default Search;
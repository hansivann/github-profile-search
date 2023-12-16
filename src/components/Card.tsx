
//TO-DO:
// build skeleton for: 
// image, count for followers, following, # of repos,
// top 5 repos
// get github api and render it to card. Hide api source! 

export default function Card() {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-6">Card goes here
        <div className="flex flex-col items-center justify-center">Picture here
          <div>username</div>
          <div className="links">
            <ul className=" flex flex-row w-max justify-center space-x-6">
              <li>followers</li>
              <li>following</li>
              <li># repos</li>
            </ul>
          <div className="top-repos">
            <ul className="flex w-max space-x-8 justify-between">
              <li>repo 1</li>
              <li>repo 2</li>
              <li>repo 3</li>
              <li>repo 4</li>
              <li>repo 5</li>
            </ul>
          </div>
          </div>
        </div>
      </div>
    </>
  )
}


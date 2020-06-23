import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Header = () => {
  const { userName, repoName } = useParams()
  return (
    <nav className="flex items-center justify-start  bg-black p-6">
      <div
        id="go-back"
        className="flex-row  font-semibold m-1 px-4 py-2 border rounded text-white border-white"
      >
        <Link to="/"> Home </Link>
      </div>
      {typeof repoName !== 'undefined' && (
        <div
          id="go-repository-list"
          className="flex-row m-1 font-semibold  px-4 py-2 border rounded text-white border-white"
        >
          <Link to={`/${userName}`}> Repos: {userName} </Link>
        </div>
      )}
    </nav>
  )
}

export default React.memo(Header)

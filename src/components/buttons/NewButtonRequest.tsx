import React, { Dispatch, SetStateAction } from 'react'

type ButtonProps = {
  page: number
  setPage: Dispatch<SetStateAction<number>>
  setState: Dispatch<SetStateAction<boolean>>
}

export const NewButtonRequest:React.FC<ButtonProps> = ({page, setPage, setState}) => {
  const handleRequest = () => {
    setPage(page + 1)
    setState(true)
  }


  return (
    <div>
      <button onClick={handleRequest}>Load more characters</button>
    </div>
  )
}

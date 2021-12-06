import { useContext, useState } from 'react'
import { NewButtonRequest } from '../buttons/NewButtonRequest'
import { QueryContext } from '../context/QueryContext'
import { useCharacterDetails } from '../hooks/useCharacterDetails/index'
import CardDetails from "./CardDetails"

export default function Cards() {
  const [page, setPage] = useState(1)
  const { state, setState } = useContext(QueryContext)
  const { characters, isLoading, isSuccess } = useCharacterDetails(state)

  return (
    isLoading ? <h1>Loading characers...</h1> : (<section className="cards">
      {<CardDetails characters={characters} />}
    </section>)
  )
}

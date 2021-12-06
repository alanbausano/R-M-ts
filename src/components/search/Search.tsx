import { useContext } from 'react'
import { QueryContext } from '../context/QueryContext'

export const Search = () => {
  const {state, setState} = useContext(QueryContext)
   const handleChange = (q: string) => {
    setState(q)
  }
  return (
    <section className='search'>
      <form>
        <input type="text" placeholder='Buscar personaje...' value={state} onChange={(e) => handleChange(e.target.value)}  />
      </form>
    </section>
  )
}

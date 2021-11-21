import React, { useState } from 'react'

type ContextState = {
  state: string | undefined
  setState: (newstate: string | undefined) => void
}

const initialState = {
  state: '',
  setState: () => {},
}

export const QueryContext = React.createContext<ContextState>(initialState)

export function QueryContextProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<string | undefined>('')
  return (
    <QueryContext.Provider value={{ state, setState }}>
      {children}
    </QueryContext.Provider>
  )
}

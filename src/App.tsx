import { useEffect, useState } from 'react'
import List from './components/List'

import './App.css'

interface Subs {
  nick: string,
  avatar: string,
  subMonths: number,
  description?: string
}

const INITIAL_STATE = [
  {
    nick: 'dapelu',
    subMonths: 3,
    avatar: 'https://i.pravatar.cc/150?u=dapelu',
    description: 'Dapelu is sometimes a mod',
  },
  {
    nick: 'ramulo',
    subMonths: 3,
    avatar: 'https://i.pravatar.cc/150?u=ramulo',
    description: 'Dapelu is a sub',
  }
]

function App() {
  const [subs, setsubs] = useState<Subs[]>([])

  useEffect(()=> {
    setsubs(INITIAL_STATE);
  }, [])
  return (
    <>
      <div className='App'>
        <h1>Channel's Subs</h1>
        <List subs={subs}></List>
      </div>
    </>
  )
}

export default App

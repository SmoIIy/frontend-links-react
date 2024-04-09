import { useState } from 'react'
import Header from './components/Header'
import Card from './components/Card'
import './App.css'

export default function App() {


  return (
    <main className="font-mono p-4 dark:bg-slate-900 h-screen">
        <Header title="Frontend links" body="Små links som kunne være brugbare at have"/>
        <Card title="Title" body="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos eaque fugiat ducimus distinctio!" link="#"/>
    </main>
  )
}


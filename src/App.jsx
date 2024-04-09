import { useState, useEffect } from 'react'
import Header from './components/Header'
import Card from './components/Card'
import Form from './components/Form'
import './App.css'

import {
    createRecipe,
    getRecipes,
    deleteRecipe,
    updateRecipe,
  } from "./modules/data.js";

  async funciton (showItems){
        
  }

export default function App() {


    return (
        <main className="font-mono p-4 dark:bg-slate-900 min-h-screen max-w-screen-2xl mx-auto container">
            <Header title="Frontend links" body="Små links som kunne være brugbare at have"/>

            <section className=''>
                <Form/>
            </section>
        
        
            <section className='flex relative'>
                <Card title="Title" body="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos eaque fugiat ducimus distinctio!" link="#"/>
            </section>
        </main>
    )
}


import { useState, useEffect } from 'react'
import Header from './components/Header'
import Card from './components/Card'
import Form from './components/Form'
import Cardgrid from './components/Cardgrid.jsx'
import './App.css'

let headersList = {
    "Accept": "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxrdG9laWRzdGV3bmpud3JqcnJhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA3NTE2MzksImV4cCI6MjAyNjMyNzYzOX0.BdU7kexk3VBblD1893zA94IEIxG5aAY59ZilRhjoAc8",
    "Prefer": "return=representation"
   }
   
   let response = await fetch("https://lktoeidstewnjnwrjrra.supabase.co/rest/v1/frontend-links", { 
     method: "GET",
     headers: headersList
   });
   
   let data = await response.json();
   console.log(data);

export default function App() {


    return (
        <main className="font-mono p-4 dark:bg-slate-900 min-h-screen max-w-screen-2xl mx-auto container">
            <Header title="Frontend links" body="Små links som kunne være brugbare at have"/>

            <section className=''>
                <Form/>
            </section>
        
        
            {/* <section className='flex relative'>
                <Card title="Title" body="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos eaque fugiat ducimus distinctio!" link="#"/>
            </section> */}

            <Cardgrid cards={data} />
        </main>
    )
}


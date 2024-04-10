import { useEffect, useState } from "react";
import Card from "./Card";
import { apikey, endpoint } from "../modules/settings";


   

export default function Cardgrid({cards}){



    return (
        <section className='flex relative'>

            {cards.map(card => {
                return (
                    <Card key={card.id} title={card.name} body={card.description} link={card.link} />
                )
            })

            }
                    
                

            
            
        </section>
    )
}
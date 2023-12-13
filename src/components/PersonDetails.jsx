import { useEffect, useState } from "react"
import { Header } from "./Header.jsx"


function PersonDetails(personId) {

    const [person, setPerson] = useState(null)

    useEffect(() => {
        //obteniendo cada personaje con su id
        fetch(`https://swapi.dev/api/people/1`)
            .then(result => result.json())
            .then(person => setPerson(person))
            
    }, [personId])

    return (
        <div>
            <Header />
            <h3 className="general-info">General information</h3>
            {person && (
                <div>
                    <p> Eye  Color <span>{ person.eye_color}</span> </p>
                    <p> Hair Color <span>{person.hair_color}</span></p>
                    <p> Skin Color <span>{person.skin_color}</span></p>
                    <p> Birth Years <span>{person.birth_year}</span></p>
                </div>
            )}
        
            <h3 className="general-info" > Vehicles </h3>
              {person && (
                 person.vehicles.map((vehicle) => (
                        <p key={vehicle.name}>{vehicle.name}</p>
                      ))
                
              
              
              )}
        </div>
    )
}



export { PersonDetails }
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Header } from './header'
import { PeopleData } from './PeopleData'
import { LoadingCell } from './LoadingCell';
import { ErrorComponent } from './ErrorComponent';



function FecthData () {
  const navigate = useNavigate();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)


useEffect(() => {
    setLoading(true)

    fetch('https://swapi.dev/api/people/')
      .then(result => result.json())
      .then(data => {
        console.log(data)
        setData(data.results)
        setLoading(false)
      })
      .catch((err) => {
        setError(err || null)
       //mostrando msj de error
       setLoading(false)
       return <ErrorComponent error={err} />       
      })
  }, [])
 
 return (

    <div className='App'>
      <Header/>
      <div className='container-data'>
        {loading && <LoadingCell loading={loading}></LoadingCell>}
        {error && <ErrorComponent error={error} />}
        {!loading && !error && (
          data.map((person) => (
           
            <PeopleData
              navigate={navigate}
              person={person}
              title={person.name}
              key={person.id}
              name={person.name}
              description={person.description}
            />

          ))
          

        )}
        </div>
    </div>
  );
}

export  {FecthData}

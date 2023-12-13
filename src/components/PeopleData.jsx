// eslint-disable-next-line react/prop-types, no-unused-vars

import { useNavigate } from "react-router-dom"


function PeopleData(person ) {
    const navigate = useNavigate()

    const HandleClick = () => {
        console.log('click')
        navigate({
            pathname: '/person-details',
            state:  {
             personId: person.id
            }
        })
    }
    return (
       
        <div className="container-name">
          <h4>{person.name}</h4>  
          <p>{person.description}</p>
         
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" onClick={HandleClick} >
                <g clipPath="url(#clip0_18332_594)">
                    <path d="M8.58997 16.59L13.17 12L8.58997 7.41L9.99997 6L16 12L9.99997 18L8.58997 16.59Z" fill="black" />
                </g>
                <defs>
                    <clipPath id="clip0_18332_594">
                        <rect width="24" height="24" fill="white" />
                    </clipPath>
                </defs>
            </svg>
            

        </div>
         
    )


}

export { PeopleData }
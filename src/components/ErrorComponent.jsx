
// eslint-disable-next-line react/prop-types
const ErrorComponent = ({error}) =>{
    return(
      <div className='msg-err'>
      <p> Failed to load Data{error}</p>
    </div>
    )
  }


  export {ErrorComponent}
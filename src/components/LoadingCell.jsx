import loading from '../assets/loading.png'

const LoadingCell = () => {

    return (
        <div className="loading">
            
            <p> Loading  
            <img className="loading-icon" src={loading} alt="" />
            </p>
            
            
        </div>
    )
}

export { LoadingCell }
const Feacher = ({id,icon,explain,title}) => {
    return ( 
        <div className="col-lg-4 col-md-6 px-4 mb-5 text-center">
            <i className= {`${icon} my-3`} style={{fontSize:"100px"}}></i>
            <h1 className="text-secondary text-center">{title}</h1>
            <p className="text-muted mt-2 text-center">{explain}</p>
        </div>
     );
}
 
export default Feacher;
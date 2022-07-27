const Blo = ({id,title,explain,imgsrc}) => {
    return ( 

        <div className="col-lg-3 col-md-6 mb-5 px-3">
              <div className="card">
                <img src={imgsrc} alt="" className="card-img-top"/>
                <div className="card-body">
                  <div className="card-title">
                    <h3 className="text-secondary text-center">{title}</h3>
                  </div>
                  <div className="card-subtitle my-4">
                    <p className="text-muted">{explain}</p>
                  </div>
                  <div className="text-center">
                    <a href="/" className="ml-1 text-primary" style={{fontSize: "25px"}}>
                      <i className="fab fa-facebook"></i>
                    </a>
                    <a href="/" className="ml-1 text-info" style={{fontSize: "25px"}}>
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="/" className="ml-1 text-danger" style={{fontSize: "25px"}}>
                      <i className="fab fa-youtube"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
     );
}
 
export default Blo;
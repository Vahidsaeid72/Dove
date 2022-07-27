const Product = ({name,explain,picsrc}) => {
    return ( 
        <div className="col-lg-4 col-md-6 text-center mt-lg-5 p-5">
            <img src={picsrc} alt="" className="img-thumbnail"/>
            <h1 className="m-3 text-secondary text-center">{name}</h1>
            <p className="text-muted">{explain}</p>
        </div>
     );
}
 
export default Product;
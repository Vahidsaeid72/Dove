const Footer = () => {
    return ( 
        <footer className="bg-secondary text-center py-5">
                <div className="container text-center">
                    <h1 className="display-3 text-center">
                    <a href="/" className="text-warning text-center">
                        <i className="fas fa-dove"></i>
                    </a>
                    </h1>
                    <h2 className="text-white text-center">داو فرق می کند</h2>
                    <div className="my-5 text-center">
                    <a href="/" className='text-center'>
                        <i className="fab fa-instagram mx-3 text-danger" style={{fontSize: "30px"}}></i>
                    </a>
                    <a href="/" className='text-center'>
                        <i className="fab fa-twitter mx-3 text-info" style={{fontSize: "30px"}}></i>
                    </a>
                    <a href="/" className='text-center'>
                        <i className="fab fa-youtube mx-3 text-danger " style={{fontSize: "30px"}}></i>
                    </a>
                    </div>
                    <p className="text-light text-center">&copy; ایجاد شده توسط وحید و اموزش های سایت نئون </p>
                </div>
         </footer>
     );
}
 
export default Footer;
const Banner = () => {
    return ( 
        <div class="container-fluid bg-warning w-100 mybanner">
            <div className="row h100 align-items-center">
                <div className="col-xl-8 text-center" >
                    <h1 className="display-2 text-center text-light">داو دوست دار پوست شما</h1>
                    <h2 className="display-3 text-center mb-2">داو فرق میکنه</h2>
                    <div className="text-center">
                        <button className="btn btn-light btn-lg my-3" type="submit">باشگاه مشتریان</button>
                        <button className="btn btn-outline-light btn-lg my-3" type="submit">وبلاگ</button>
                    </div>
                </div>
                <div className="col-xl-4">
                    <img src="images/products.png" className="img-fluid d-none d-xl-block" alt=""/>
                </div>
            </div>
           </div>
     );
}
 
export default Banner;
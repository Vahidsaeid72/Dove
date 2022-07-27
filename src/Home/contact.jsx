const Contact = () => {
    return ( 
        <section className="bg-light p-5"> 
        <div className="container-fluid">
            <div className="text-center">
            <h1 className="text-warning text-center">ارتباط با ما</h1>
            <p className="text-muted my-5 text-center">او دوست دار پوست و موی شما بهترین انتخاب برای کسانی که زیبایی خود اهمیت میدهنداو دوست دار پوست و موی شما بهترین انتخاب برای کسانی که زیبایی خود اهمیت میدهند</p>
            </div>
            <div className="row justify-content-center ">
            <div className="col-lg-6 ">
                <h3 className="text-secondary text-center my-5">آیا سوالی دارید؟</h3>
                <form action="" className="text-muted text-center">
                    <div className="form-group">
                        <label for="name">نام</label>
                        <input id="name" className="form-control" type="text"/>
                    </div>
                    <div className="form-group">
                        <label for="email">ایمیل</label>
                        <input id="email" className="form-control" type="text"/>
                    </div>
                    <div className="form-group">
                        <label for="massege">پیام</label>
                    <textarea id="massege" className="form-control" rows="3" cols=""></textarea>
                    </div>
                    <button className="btn btn-outline-warning btn-block mt-2">ارسال نظر</button>
                </form>
            </div>
            </div>
        </div>
        </section>
     );
}
 
export default Contact;
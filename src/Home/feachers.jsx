import { useState } from "react";
import Feacher from "./feacher";

const Feachers = () => {

    const [feachers,setFeachers]=useState([
        {
            id:1 ,
            title :'نشان برتر',
            explain : 'داو دوست دار پوست و موی شما بهترین دوست دار پوست و موی شما بهترین انتخاب انتخاب برای کسانی که زیبایی خود اهمیت میدهند',
            Icon : 'fa fa-award text-warning'
        },
        {
            id:2 ,
            title :'کاملا طبیعی',
            explain : 'داو دوست دار پوست و موی شما بهترین دوست دار پوست و موی شما بهترین انتخاب انتخاب برای کسانی که زیبایی خود اهمیت میدهند',
            Icon : 'fa fa-leaf text-success'
        },
        {
            id:3 ,
            title :'دوست دار سلامتی',
            explain : 'داو دوست دار پوست و موی شما بهترین دوست دار پوست و موی شما بهترین انتخاب انتخاب برای کسانی که زیبایی خود اهمیت میدهند',
            Icon : 'fa fa-heartbeat text-danger'
        },
])

    return ( 
        <section className="bg-light py-5 text-center">
        <div className="container">
            <div className="text-center">
            <h1 className="text-warning display-4 text-center">مدیون اعتماد شما هستیم</h1>
            <p className="text-muted my-4 text-center">داو دوست دار پوست و موی شما بهترین انتخاب برای کسانی که زیبایی خود اهمیت میدهند</p>
            <div className="row text-center my-5">
                {feachers.map(f=> <Feacher id={f.id} title={f.title} explain={f.explain} icon={f.Icon}/>)}
            </div>
            </div>
        </div>
    </section>
     );
}
 
export default Feachers;
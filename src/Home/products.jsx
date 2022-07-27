import { useState } from "react";
import Product from "./product";

const Products = () => {
    const[producs,setPrudocs]=useState([
        {id:1,
        name:'نرم کننده',
        explain:'داو دوست دار پوست و موی شما داو دوست دار پوست و موی شما بهترین انتخاب برای کسانی که زیبایی خود اهمیت میدهند',
        picsrc:"images/p1.jpg"
        },
        {id:2,
        name:'پکیج داو',
        explain:'داو دوست دار پوست و موی شما  داو دوست دار پوست و موی شما بهترین انتخاب برای کسانی که زیبایی خود اهمیت میدهند',
        picsrc:"images/p2.jpg"
            },
        {id:3,
        name:'صابون',
        explain:'داو دوست دار پوست و موی شما ب داو دوست دار پوست و موی شما بهترین انتخاب برای کسانی که زیبایی خود اهمیت میدهند',
        picsrc:"images/p3.jpg"
            }   
    ])

    return ( 
        
        <section>
            <div className="container">
                <div className="text-center">
                    <h1 className="text-warning text-center"> کیفیت سخن محصولات ماست</h1>
                    <p className="text-muted my-5">داو دوست دار پوست و موی شما بهترین انتخاب برای کسانی که زیبایی خود اهمیت میدهند داو دوست دار پوست و موی شما بهترین انتخاب برای کسانی که زیبایی خود اهمیت میدهند</p>
                </div>
                    <div className="row my-5">
                            {producs.map(p => <Product name={p.name} explain={p.explain} picsrc={p.picsrc} id={p.id}/>)}
                    <div/>
                </div>
            </div>
         </section>
     );
}
 
export default Products;
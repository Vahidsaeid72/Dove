import { useState } from "react";
import Blo from "./blo";

const Blog = () => {

const[blogs,setblogs]=useState([
  {id:1,
   title : 'شستن دست',
   explain : 'داو دوست دار پوست و موی شما بهترین انتخاب برای کسانی که زیبایی خود',
   imgsrc : 'images/b1.jpg'
  },
  {id:2,
   title : 'کرم های دست',
   explain : 'داو دوست دار پوست و موی شما بهترین انتخاب برای کسانی که زیبایی خود',
   imgsrc : 'images/b2.jpg'
  },
  {id:3,
   title : 'نوشیدن آب',
   explain : 'داو دوست دار پوست و موی شما بهترین انتخاب برای کسانی که زیبایی خود',
   imgsrc : 'images/b3.jpg'
  },
  {id:4,
   title : 'نور مناسب',
   explain : 'داو دوست دار پوست و موی شما بهترین انتخاب برای کسانی که زیبایی خود',
   imgsrc : 'images/b4.jpg'
  },
]);

    return ( 
    <section className="bg-secondary p-5">
        <div className="container-fluid">
          <h1 className="text-center text-warning mb-5">تازه های وب</h1>
          <div className="row">
            {blogs.map(b=><Blo id={b.id} title={b.title} explain={b.explain} imgsrc={b.imgsrc}/>)}
          </div>
        </div>
      </section>
     );
}
 
export default Blog;
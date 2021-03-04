
import React from 'react';
import sdata from './ImagesArray';
import Cards from './Cards';
const Services = () => {
return (
    <>
        <h2 className="text-center pb-3 pt-5">Our Services </h2>
        <div className="container-fluid mb-5">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row gy-3">
                        
                       
                       {
                           sdata.map((val,ind) => {
                                return <Cards key={ind} imgsrc={val.imgsrcCard} title={val.imgtitle}/>
                           })
                       }

                        

            </div>
                </div>
                    
                        </div>
        </div>
    </>
    )
}
export default Services;
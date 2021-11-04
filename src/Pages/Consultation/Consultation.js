import React from 'react';
import consultationbg from '../../images/consultation.jpg';


const Consultation = () => {

    return (
        <div className="w-full mx-auto flex flex-col items-center " >
            <div className="w-full h-96 object-cover bg-fixed bg-gray-600 bg-blend-multiply " style={{ backgroundImage: `url(${consultationbg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
                <p className="font-bold text-3xl lg:text-7xl md:text-5xl text-center  py-3 text-blue-400 uppercase">Talk to our fitness experts & get that alpha shape</p>
            </div>

            <div className="lg:w-6/12 w-11/12 mx-auto p-5 m-5 flex flex-col items-center justify-center" >
                <p className="w-full text-4xl py-10 text-center font-extrabold text-white">Reach An Expert</p>

                <input className="lg:w-2/4 w-3/4 p-3 my-5 border-2 rounded-md" type="text" placeholder="Enter Name" />


                <input className="lg:w-2/4 w-3/4 p-3 my-5 border-2 rounded-md" type="text" placeholder="Enter Email" />


                <input className="lg:w-2/4 w-3/4 p-3 my-5 border-2 rounded-md" type="number" placeholder="Enter Contact Number" />

                <textarea className="lg:w-2/4 w-3/4 p-3 my-5 border-2 rounded-md" type="text" placeholder="Enter Query" />

                <button className="w-4/5 mx-auto my-3 font-bold text-2xl p-3  text-center bg-blue-400 text-white uppercase">Submit</button>
            </div>
        </div>
    );
};

export default Consultation;
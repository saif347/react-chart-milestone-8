import { useEffect, useState } from "react";
import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, Tooltip, } from 'recharts';


const AxiosData = () => {
    const [fakeData, setFakeData]= useState([])

    useEffect(()=>{
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => {
            const phoneData = data.data.data;
            const fakePhone = phoneData.map(phone =>{
                const obj ={
                    name: phone.phone_name,
                    price: parseInt(phone.slug.split('-')[1]),
                }
                return obj;
            })
            setFakeData(fakePhone)
        })
    },[])
        return (
            <div className="text-center my-8">
                <h3 className="text-3xl font-semibold">I phone Price Compare:{fakeData.length}</h3>

                <BarChart width={800} height={400} data={fakeData}>
                    <XAxis dataKey={'name'}></XAxis>
                    <YAxis></YAxis>
                    <Tooltip></Tooltip>
                    <Bar dataKey="price" fill="#8884d8" />
                </BarChart>


                
            </div>
        );
};

export default AxiosData;
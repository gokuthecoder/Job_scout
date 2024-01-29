import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import ApiServices, { BASE_IMG } from "../../../ApiServices/ApiServices"

export default function All_companies() {
    const [data, setData] = useState()
    useEffect(() => {
        ApiServices.allcompanyuser().then(res => {
            setData(res.data.data)
            console.log(res.data.data)
        })
    }, [])

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    const truncateDescription = (description) => {
        const words = description.split(' ');

        const truncatedDescription = words.slice(0, 5).join(' ');

        return `${truncatedDescription} ...more`;
    };

    return (
        <>
        <h1 className="text-success text-center my-4" style={{textDecoration:"double underline", textTransform:'uppercase'}}>All Company</h1>
            <div className="container">
                <div className="row">
                {
                    data?.map((el, index) => (
                        <div className="card text-white bg-primary mb-3" style={{ maxWidth: "18rem", maxHeight:'100px' }} >
                            <div className="card-header" style={{color:'#526D82', textTransform:'full-size-kana'}} value={index}><Link to={'/companydetails/' + el?._id}>{el?.name}</Link></div>
                            <div className="card-body">
                                {/* <h5 className="card-title">Primary card title</h5> */}
                                <p style={{color:'#176B87'}}>{truncateDescription(el?.description)}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div >
        </>
    )
}
// <div className="card-header" value={index}><Link to={'/companydetails/'+ el?._id}>{el?.name}</Link></div>
// <div className="card-body text-primary">
//     <h5 className="card-title">Primary card title</h5>
//     <p className="card-text">{truncateDescription(el?.description)}</p>
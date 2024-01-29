import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import ApiServices, { BASE_IMG } from "../../../ApiServices/ApiServices"

export default function All_branchs() {
    const [data, setData] = useState()
    useEffect(() => {
        ApiServices.allbranchuser().then(res => {
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
            <div className="container-fluid">
                <div className="row">
                    {
                        data?.map((el, index) => (
                            <div className="col-3 mx-4">
                                <div className="card mb-3" style={{ maxWidth: "48rem", cursor:'pointer'}}>
                                    <div className="card-header" value={index}><Link to={'/companydetails/'+ el?._id}>{el?.name}</Link></div>
                                    <div className="card-body text-primary">
                                        <h5 className="card-title">Primary card title</h5>
                                        <p className="card-text">{truncateDescription(el?.description)}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

        </>
    )
}
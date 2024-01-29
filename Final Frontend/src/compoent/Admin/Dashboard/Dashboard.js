import { useEffect, useState } from 'react';
import './Dashboard.css';
import ApiServices, { dashboard } from '../../../ApiServices/ApiServices';

export default function Dashboard() {
    const [data, setData] = useState({
        totalappliedjob: 0,
        totalbranch: 0,
        totalcompany: 0,
        totaljob: 0,
        totalplacement: 0,
        totalstudent: 0,
        totaluser: 0,
    });

    useEffect(() => {
        ApiServices.dashboard()
            .then((res) => {
                if (res.data.success) {
                    setData({
                        totalappliedjob: res.data.totalappliedjob,
                        totalbranch: res.data.totalbranch,
                        totalcompany: res.data.totalcompany,
                        totaljob: res.data.totaljob,
                        totalplacement: res.data.totalplacement,
                        totalstudent: res.data.totalstudent,
                        totaluser: res.data.totaluser,
                    });
                } else {
                    console.error('ApiServices.dashboard() was not successful:', res);
                }
            })
            .catch((error) => {
                console.error('Error fetching dashboard data:', error);
            });
    }, []);

    return (
        <>

            <h1 className='text-success' style={{ textAlign: 'center' }}>Dashboard</h1>
            <div class="container mt-4">
                <div class="row">
                    <div class="col-md-12">
                        <table class="table table-bordered custom-table">
                            <thead>
                                <tr>
                                    <th>Category</th>
                                    <th>Count</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Applied Jobs</td>
                                    <td>11</td>
                                </tr>
                                <tr>
                                    <td>Total Branches</td>
                                    <td>20</td>
                                </tr>
                                <tr>
                                    <td>Total Company</td>
                                    <td>9</td>
                                </tr>
                                <tr>
                                    <td>Total Jobs</td>
                                    <td>4</td>
                                </tr>
                                <tr>
                                    <td>Total Placement</td>
                                    <td>5</td>
                                </tr>
                                <tr>
                                    <td>Total Students</td>
                                    <td>9</td>
                                </tr>
                                <tr>
                                    <td>Total Users</td>
                                    <td>10</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

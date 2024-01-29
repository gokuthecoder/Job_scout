import './Add_job.css'
import React from 'react';
export default function Add_job() {
    return (
        <>
            <div className='container-fluid'>
                <form>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-2 col-sm-1'></div>
                            <div className='col-8 col-sm-10'>
                                <div className="mb-3 row">
                                    <div className='col-md-6 col-sm-12'>
                                        <label for="exampleInputName1" className="form-label">Job Name </label>
                                        <input type="text" className="form-control" id="exampleInputName1" aria-describedby="emailHelp" />
                                    </div>
                                    <div className="mb-3 col-md-6 col-sm-12">
                                        <label for="exampleInputSemester1" className="form-label">Semester</label>
                                        <input type="semester" className="form-control" id="exampleInputSemester1" />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <div className='col-md-6 col-sm-12'>
                                        <label for="exampleInputSkills1" className="form-label">Skills</label>
                                        <input type="text" className="form-control" id="exampleInputSkills1" aria-describedby="emailHelp" />
                                    </div>
                                    <div className="mb-3 col-md-6 col-sm-12">
                                        <label for="exampleInputPassword1" className="form-label">Image</label>
                                        <input type="file" className="form-control" id="exampleInputPassword1" />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <div className='col-md-6 col-sm-12'>
                                        <label for="exampleInputEmail1" className="form-label">Company</label>
                                        <select className="form-select" aria-label="Default select example">
                                            <option selected>Open this select menu</option>
                                        </select>
                                    </div>
                                    <div className="mb-3 col-md-6 col-sm-12">
                                        <label for="exampleInputPassword1" className="form-label">Branch</label>
                                        <select className="form-select" aria-label="Default select example">
                                            <option selected>Open this select menu</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="mb-3 col-">
                                    <div className="form-floating">
                                        <textarea className="form-control textarea" placeholder="Leave a comment here" id="floatingTextarea2" ></textarea>
                                        <label for="floatingTextarea2">Comments</label>
                                    </div>
                                </div>
                                <div className=' text-center'>
                                    <button type="submit" className="btn btn-success" >Add</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-2 col-sm-1'></div>
                </form>
            </div>
        </>
    )
}
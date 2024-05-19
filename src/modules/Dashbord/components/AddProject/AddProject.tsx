import {  useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as projectServices from "../../services/projectsServices"
import { ICONS } from '../../utils/icons-dash';

import './AddProject.scss'

const AddProject = () => {

    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [year, setYear] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState({});

    const [errorMessage, setErrorMessage] = useState('');

    const sendData = (event: any) => {
        event.preventDefault();
        let data = {
            title: title,
            year: year,
            category: category,
            description: description,
            image: image
        }
        console.log(data);
        try {
            projectServices.addNewProject(data);
            navigate("/dashboard/projects");
        } catch (error) {
            setErrorMessage('Not valid input, try again');
            console.error('Error creating new project:', error);
        }
    }
    const goBack = () => {
        navigate("/dashboard/projects");
    }


    return (
        <div className="BY_addProject">
            <div className="container">
                <div className='topSection'>
                    <h2>Add New Project</h2>
                </div>
                <div className="contentSection">
                    <form onSubmit={(event) => sendData(event)} className='form'>
                        <div className='field long'>
                            <label>
                                Title <sup>*</sup>
                            </label>
                            <input type='text' placeholder='Portfolio Project' onChange={(e) => { setTitle(e.target.value) }} />
                        </div>
                        <div className='field'>
                            <label>
                                Year <sup>*</sup>
                            </label>
                            <input type='text' placeholder='2022' onChange={(e) => { setYear(e.target.value) }} />

                        </div>
                        <div className='field'>
                            <label>
                                Category <sup>*</sup>
                            </label>
                            <input type='text' placeholder='Full Stack' onChange={(e) => { setCategory(e.target.value) }} />

                        </div>
                        <div className='field long'>
                            <label>
                                Description <sup>*</sup>
                            </label>
                            <input type='text' placeholder='This Project implements ....' onChange={(e) => { setDescription(e.target.value) }} />
                        </div>
                        <div className='field long'>
                            <label > Image <sup>*</sup></label>

                            <input type='file' id='image'
                                onChange={(e) => {
                                    if (e.target.files && e.target.files.length > 0) {
                                        setImage(e.target.files[0]);
                                        
                                    };

                                }} />
                            <label htmlFor='image' className='image_label'>
                                 Upload an Image 
                            </label>
                            <p>png, jpg, jpeg, gif only</p>
                        </div>

                        <div className="buttonSection">
                            <input type="submit" value="Submit" className='submit' />

                        </div>
                    </form>

                </div>
                <div className="bottomSection">
                    <button value="Back" className='back' onClick={goBack}> {ICONS.arrow_left}Back</button>
                </div>
            </div>

          {(errorMessage !== "") && <p style={{ color: "red" }}>{errorMessage}</p>}


        </div>
    )
}

export default AddProject;
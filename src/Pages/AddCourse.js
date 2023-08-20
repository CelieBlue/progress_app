import { useState } from 'react';

export default function AddCourse(props) {
    const [course, setCourse] = useState({
        courseName: '',
        courseCategory: '',
        courseDescription: ''
    });

    const { handleAddCourse } = props;

function handleSubmit(event) {
    event.preventDefault();
    handleAddCourse(course);
}

function handleChange(event) {
    const { name, value } = event.target;
    setCourse({...course, [name]: value });
}

    return(
        <div className="add_course">
            <h1>Ajouter un cours</h1>
            <div className="background_form">
                <form onSubmit={(event) => handleSubmit(event)}>
                    <label htmlFor="courseName">Nom du cours</label>
                    <br />
                    <input type="text" name="courseName" id="courseName" value={ course.courseName } onChange={(event) => handleChange(event)} />
                    <br />
                    <label htmlFor="courseCategory">Catégorie</label>
                    <br />
                    <select name="courseCategory" id="courseCategory" value={ course.courseCategory } onChange={(event) => handleChange(event)}>
                        <option value="">Choisir une catégorie</option>
                        <option value="front">Front</option>
                        <option value="Back">Back</option>
                        <option value="Fullstack">Fullstack</option>
                        <option value="Autres">Autres</option>
                    </select>
                    <br />
                    <label htmlFor="courseDescription" >Description</label>
                    <br />
                    <textarea 
                        name="courseDescription" 
                        id="courseDescription"
                        cols="30" 
                        rows="10"
                        value={ course.courseDescription } onChange={(event) => handleChange(event)}>
                    </textarea>
                    <br />
                    <br />
                    <input type="submit" value="Ajoutez ce cours" className="btn" />
                </form>
            </div>
        </div>
    )
}
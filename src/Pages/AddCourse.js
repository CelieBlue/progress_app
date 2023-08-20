export default function AddCourse(props) {
    const { handleAddCourse } = props;
    const course = {
        name: 'React',
        category: 'front',
        description: 'Apprendre React'
    };

function handleSubmit(event) {
    event.preventDefault();
    handleAddCourse(course);
}

    return(
        <div className="add_course">
            <h1>Ajouter un cours</h1>
            <div className="background_form">
                <form onSubmit={(event) => handleSubmit(event)}>
                    <label htmlFor="course-name">Nom du cours</label>
                    <br />
                    <input type="text" name="course-name" id="course-name" />
                    <br />
                    <label htmlFor="course-category">Catégorie</label>
                    <br />
                    <select name="course_category" id="course-category">
                        <option value="">Choisir une catégorie</option>
                        <option value="front">Front</option>
                        <option value="Back">Back</option>
                        <option value="Fullstack">Fullstack</option>
                        <option value="Autres">Autres</option>
                    </select>
                    <br />
                    <label htmlFor="course-description" >Description</label>
                    <br />
                    <textarea 
                        name="course-description" 
                        id="course-description"
                        cols="30" 
                        rows="10">
                    </textarea>
                    <br />
                    <br />
                    <input type="submit" value="Ajoutez ce cours" className="btn" />
                </form>
            </div>
        </div>
    )
}
export default function AddCourse() {
    return(
        <div className="add_course">
            <h1>Ajouter un cours</h1>
            <div>
                <form>
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
                    <label htmlFor="course-description">Description</label>
                    <br />
                    <textarea 
                        name="course-description" 
                        id="course-description"
                        cols="30" 
                        rows="10">
                    </textarea>
                    <br />
                    <br />
                    <input type="submit" value="Ajout Techno" />
                </form>
            </div>
        </div>
    )
}
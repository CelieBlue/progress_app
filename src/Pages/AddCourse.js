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
                    <input type="submit" value="Ajout Techno" />
                </form>
            </div>
        </div>
    )
}
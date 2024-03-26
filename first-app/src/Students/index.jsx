import PropTypes from "prop-types";

const Student = ({notes,name}) => {

    let moyenne = 0;
    if (notes.length > 0) {
        for (var i = 0; i < notes.length; i++) moyenne += notes[i];
        moyenne /= notes.length;
    }

    return (
        <tr>
          <td>{name}</td>
            {
                notes.map((note,index) => <td key={index}>{note}</td>)
            }
            <td>{Math.round(moyenne)}</td>
        </tr>
    )
}

Student.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.number),
    name: PropTypes.string
}

const Students = ({list}) => {

    return (
        <>
            <h3>Students</h3>
            <table>
                <thead>
                    <tr>
                        <th>Student</th>
                        <th>Note 1</th>
                        <th>Note 2</th>
                        <th>Note 3</th>
                        <th>Moyenne</th>
                    </tr>
                </thead>
                <tbody>{ list.map(({notes,name},index) => <Student key={index} notes={notes} name={name} />)  }</tbody>
                <tfoot></tfoot>
            </table>
        </>
    )
}

Students.propTypes = {
    list: PropTypes.arrayOf(
        PropTypes.shape({
            notes: PropTypes.arrayOf(PropTypes.number),
            name: PropTypes.string
        })
    )
}

export default Students

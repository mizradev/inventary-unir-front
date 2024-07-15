const DataTable = ({columns, data}) => {

    return (
        <>
            <table className="datatable">
                <thead>
                    <tr>
                        {columns.map((column) => {
                            <th>{column.name}</th>
                        })}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Alfreds Futterkiste</td>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}

export default DataTable;
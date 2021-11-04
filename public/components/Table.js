

var Table = function (props) {
    console.log("I am the child", props);
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <th>CaseID</th>
              <th>Case Status</th>
              <th>Case Priority</th>
              <th>Assigned To</th>
              <th>Due Date</th>
              <th>Case Type</th>
            </tr>
            {props.cases.map((obj, index) => {
              return (
                <TableRow key={index} caseObj={obj} caseClick={props.caseClick} />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };


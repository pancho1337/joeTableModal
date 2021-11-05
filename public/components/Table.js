

var Table = function (props) {
    console.log("I am the child", props);
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <th onClick = {(e)=>{props.columnOrg(e,"caseID")}}>Case ID</th>
              <th onClick = {(e)=>{props.columnOrg(e,"caseStatus")}}>Case Status</th>
              <th onClick = {(e)=>{props.columnOrg(e,"priority")}}>Case Priority</th>
              <th onClick = {(e)=>{props.columnOrg(e,"assignedTo")}}>Assigned To</th>
              <th onClick = {(e)=>{props.columnOrg(e,"dueDaate")}}>Due Date</th>
              <th onClick = {(e)=>{props.columnOrg(e,"caseType")}}>Case Type</th>
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



var TableRow = function (props) {
    return (
      <tr>
        <td
          onClick={(e) => {
            props.caseClick(e, props.caseObj);
          }}
        >
          {props.caseObj.caseID}
        </td>
        <td>{props.caseObj.caseStatus}</td>
        <td>{props.caseObj.priority}</td>
        <td>{props.caseObj.assignedTo}</td>
        <td>{props.caseObj.dueDate}</td>
        <td>{props.caseObj.caseType}</td>

      </tr>
    );
  };


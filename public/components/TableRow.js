
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
      </tr>
    );
  };


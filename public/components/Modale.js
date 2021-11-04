var Modale = function (props) {
    if (props.numClick) {
      return (
        <div className="modal">
          <div
            className="overlay"
            onClick={(e) => {
              props.overlayClick(e);
            }}
          ></div>
          <div className="modal_content">
            <h2><b>Case Details</b></h2>
            <h3>Case ID:</h3>
            <p>{props.numClick.caseID}</p>
            <hr/>
            <h3>Case Status:</h3>
            <p>{props.numClick.caseStatus}</p>
            <hr/>
            <h3>Assigned To:</h3>
            <p>{props.numClick.assignedTo}</p>
            <hr/>
            <h3>Case Type:</h3>
            <p>{props.numClick.caseType}</p>
            <hr/>
            <h3>Case Priority:</h3>
            <p>{props.numClick.priority}</p>
            <hr/>
            <button title="Close" className="close_modal">
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>
      );
    } else {
      return <div />;
    }
  };


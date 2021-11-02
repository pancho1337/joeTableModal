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
            <h2>Hey Awesome Modal!</h2>
            <p>{props.numClick.caseID}</p>
            <p>{props.numClick.caseStatus}</p>
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


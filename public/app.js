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
var Searches = function (props) {
  return (
    <div className="dropdown">
      <button className="dropbtn">Case Status</button>
      <div className="dropdown-content">
        <a onClick={ (e)=>{props.caseFiter(e, "Active")}}>Active</a>
        <a onClick={ (e)=>{props.caseFiter(e, "Pending")}}>Pending</a>
        <a onClick={ (e)=>{props.caseFiter(e, "Resolved")}}>Resolved</a>
      </div>
    </div>
  );
};
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

var Table = function (props) {
  console.log("I am the child", props);
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>CaseID</th>
            <th>Case Status</th>
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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allCases: [],
      cases: [],
      numClick: null,
    };
    this.caseClick = this.caseClick.bind(this);
    this.overlayClick = this.overlayClick.bind(this);
    this.caseFilter=this.caseFilter.bind(this);
  }
  caseClick(e, obj) {
    e.preventDefault();
    console.log("someone clicked a case", obj);
    this.setState({
      numClick: obj,
    });
  }
  overlayClick(e) {
    e.preventDefault();
    console.log("I am empty space");
    this.setState({
      numClick: null,
    });
  }
  caseFilter(e, status){
    e.preventDefault()
    console.log('We are running this caseFilter')
    var newArray = this.state.allCases.filter(elem=>elem.caseStatus === status)
    this.setState({
      cases: newArray
    })
  };
  componentDidMount(prevProps) {
    console.log("this is previous props", prevProps);
    fetch("/cases")
      .then((response) => response.json())
      .then((data) => {
        this.setState(
          {
            allCases: data,
            cases: data,
          },
          () => {
            console.log("this is after the setState has happened", this.state);
          }
        );
      });
  }
  render() {
    console.log("this is the state", this.state);
    return (
      <div>
        <h3>Arrrggghhh... Give me Tacos...</h3>
        <h2>
          State. only have 2 things to reduce complexity caseID and caseStatus
        </h2>
        <Searches caseFiter={this.caseFilter} />
        <Table cases={this.state.cases} caseClick={this.caseClick} />
        <Modale
          numClick={this.state.numClick}
          overlayClick={this.overlayClick}
        />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("app"));

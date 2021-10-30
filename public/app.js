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
class Searches extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      caseStatus: null,
      priority: null,
      assignedTo: null,
      caseType: null,
      dueDate: null,
      arrSelection: [],
    };
    this.caseSelector = this.caseSelector.bind(this);
  }
  clearFilter(e){
    e.preventDefault()
    this.setState({
      caseStatus: null,
      priority: null,
      assignedTo: null,
      caseType: null,
      dueDate: null
    },()=>{
      console.log("We ran the clear filter",this.state)
    })
  }
  caseSelector(e, status) {
    e.preventDefault();
    console.log("this is the event", e);
    this.setState(
      {
        [e.target.id]: e.target.value,
      },
      () => {
        console.log("this is the state of the search", this.state);
      }
    );
  }
  render() {
    return (
      <div>
        <form>
          <label>Case Status:</label>
          <select
            onChange={(e) => {
              this.caseSelector(e, "Active");
            }}
            name="caseStatus"
            id="caseStatus"
          >
            <option value="">No Selection</option>
            <option value="Active">Active</option>
            <option value="Pending">Pending</option>
            <option value="Resolved">Resolved</option>
          </select>
          <label>Case Priority:</label>
          <select
            onChange={(e) => {
              this.caseSelector(e, "Active");
            }}
            name="priority"
            id="priority"
          >
            <option value="">No Selection</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          <label>Assigned To:</label>
          <select
            onChange={(e) => {
              this.caseSelector(e, "Active");
            }}
            name="assignedTo"
            id="assignedTo"
          >
            <option value="">No Selection</option>
            <option value="pete">Pete</option>
            <option value="pancho">Pancho</option>
            <option value="tom">Tom</option>
          </select>
          <label>Case Type:</label>
          <select
            onChange={(e) => {
              this.caseSelector(e, "Active");
            }}
            name="caseType"
            id="caseType"
          >
            <option value="">No Selection</option>
            <option value="it">IT</option>
            <option value="maintenance">Maintenance</option>
            <option value="repair">Repair</option>
          </select>
          <label>Due Date:</label>
          <select
            onChange={(e) => {
              this.caseSelector(e, "Active");
            }}
            name="dueDate"
            id="dueDate"
          >
            <option value="">No Selection</option>
            <option value="oneWeek">1 Week</option>
            <option value="oneMonth">1 Month</option>
            <option value="twoMonths">2 Months</option>
          </select>
          <br></br>
          <input type="submit" value="Apply Filter" />
        </form>
        <button onClick={(e)=>{this.clearFilter(e)}}>Clear Filter</button>
      </div>
    );
  }
}

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
    this.caseFilter = this.caseFilter.bind(this);
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
  caseFilter(e, status) {
    e.preventDefault();
    console.log("We are running this caseFilter");
    var newArray = this.state.allCases.filter(
      (elem) => elem.caseStatus === status
    );
    this.setState({
      cases: newArray,
    });
  }
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

var Modale = function () {
  return (
    <div>
      <h2>
        This will be were thing you have issues it will also take its state from
        the app parent
      </h2>
    </div>
  );
};
var Searches = function () {
  return (
    <div>
      <h2>Theres going to be some inputs here</h2>
    </div>
  );
};
var TableRow = function (props) {
  return (
    <tr >
      <td onClick={(e)=>{props.caseClick(e, props.caseObj)}}>{props.caseObj.caseID}</td>
      <td>{props.caseObj.caseStatus}</td>
    </tr>
  );
};

var Table = function (props) {
  console.log("I am the child", props);
  return (
    <div>
      <table>
        <tr>
          <th>CaseID</th>
          <th>Case Status</th>
        </tr>
        {props.cases.map((obj) => {
          return <TableRow caseObj={obj} caseClick ={props.caseClick}/>;
        })}
      </table>
    </div>
  );
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cases: [],
      numClick:null,
    };
    this.caseClick=this.caseClick.bind(this)
  }
  caseClick(e , obj) {
    e.preventDefault()
    console.log("someone clicked a case",obj)
  }

  componentDidMount(prevProps) {
    console.log("this is", prevProps);
    fetch("/cases")
      .then((response) => response.json())
      .then((data) => {
        this.setState(
          {
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
        <Searches />
        <Table cases={this.state.cases} caseClick={this.caseClick} />
        <Modale />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("app"));

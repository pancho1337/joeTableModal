class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allCases: [],
      cases: [],
      numClick: null,
      trigger: true
    };
    this.caseClick = this.caseClick.bind(this);
    this.overlayClick = this.overlayClick.bind(this);
    this.caseFilter = this.caseFilter.bind(this);
    this.clearMaster = this.clearMaster.bind(this);
  }
  caseClick(e, obj) {
    e.preventDefault();
    //Convert this function to a way to get data from the search component and filter cases into all cases
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
  clearMaster(){
    this.setState({
      cases: this.state.allCases
    })
  }
  caseFilter(e, cstate) {
    e.preventDefault();
    // var searchArr = Object.values(cstate).filter(word => word !== null)
    var newArray = [...this.state.allCases];
    for (const key in cstate) {
      if (cstate[key] !== "") {
        console.log(newArray,cstate[key])
        newArray = newArray.filter((elem) => elem[key] === cstate[key]);
      }
    }    
    console.log("We are running this caseFilter", newArray);

    this.setState({
      trigger: !this.state.trigger,
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
        <Searches clearMaster={this.clearMaster} trigger={this.state.trigger} caseFilter={this.caseFilter} />
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

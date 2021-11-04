
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
    this.miniSearch = this.miniSearch.bind(this);
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
      numClick: null
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
  miniSearch(e){
    e.preventDefault()
    var miniResults = [];
    console.log("this is the event",e.target.search.value)
    for(var i=0;i<this.state.allCases.length;i++){
      for (var key in this.state.allCases[i]){
        if (this.state.allCases[i][key] === e.target.search.value){
          miniResults.push(this.state.allCases[i])
        }
      }
    }
    this.setState({
      cases:miniResults
    })
  }
  render() {
    console.log("this is the state", this.state);
    return (
      <div>
        {/* 
        future plans organize by column*/}
        <h2>Case list</h2>
        <Searches clearMaster={this.clearMaster} trigger={this.state.trigger} caseFilter={this.caseFilter} />
        <br/><br/><br/>
        <form id="miniSearch" onSubmit={(e)=>{this.miniSearch(e)}}>
          <input type="text" placeholder="Search.." name="search"/>
          <button type="submit"><i className="fa fa-search"></i></button>
        </form>
        <br/>
        <br/>
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

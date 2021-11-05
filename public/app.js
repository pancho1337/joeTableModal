
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
    this.columnOrg = this.columnOrg.bind(this);
    this.pushCaseSomething = this.pushCaseSomething.bind(this);
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
columnOrg(e,pName){
e.preventDefault()
console.log("this is the property name",pName)
var sortResults = [...this.state.allCases]
sortResults.sort((a,b)=>{
  if(typeof a[pName]=== "number"){
    return a[pName] - b[pName];
  }else{
    var nameA = a[pName].toUpperCase(); // ignore upper and lowercase
    var nameB = b[pName].toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  }

})
console.log("I am the results", sortResults)
this.setState({
  cases: sortResults
})
console.log("somebody clicked on the parent")
}
pushCaseSomething(e,data){
  e.preventDefault()
  console.log("pushCaseSomething being invoked",data)
fetch("/addCase", {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});

}

  render() {
    console.log("this is the state", this.state);
    return (
      <div>
        {/* 
        future plans organize by column 
        In order to organize the column organize from low to high or vice versa
        use sort reorganize from high to low
        set the new state to be this array
        */}
        <h2>Insert Case</h2>
        <InsertForm pushCaseSomething ={this.pushCaseSomething}/>
        <br/><br/><br/>
        <h2>Case list</h2>
        <Searches clearMaster={this.clearMaster} trigger={this.state.trigger} caseFilter={this.caseFilter} />
        <br/><br/><br/>
        <form id="miniSearch" onSubmit={(e)=>{this.miniSearch(e)}}>
          <input type="text" placeholder="Search.." name="search"/>
          <button type="submit"><i className="fa fa-search"></i></button>
        </form>
        <br/>
        <br/>
        <Table columnOrg={this.columnOrg} cases={this.state.cases} caseClick={this.caseClick} />
        <Modale
          numClick={this.state.numClick}
          overlayClick={this.overlayClick}
        />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("app"));

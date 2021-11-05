

class InsertForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        caseStatus: "",
        priority: "",
        assignedTo: "",
        caseType: "",
        dueDate: ""
      };
      this.insertCase = this.insertCase.bind(this);
    }
    clearFilter(e){
      e.preventDefault()
      this.setState({
        caseStatus: "",
        priority: "",
        assignedTo: "",
        caseType: "",
        dueDate: ""
      },()=>{
        console.log("We ran the clear filter",this.state)
        this.props.clearMaster()
      })
    }
    insertCase(e) {
      e.preventDefault();
      console.log("this is the event", e);
      this.setState(
        {
          [e.target.id]: e.target.value,
        },
        () => {
          console.log("this is the state of the insert case", this.state);
        }
      );
    }
    render() {
      return (
      <div className= "box">
        <form onSubmit={(e)=>{
            // this.props.caseFilter(e,this.state)
          }}>
            <label>Case Status:</label>
            <input id="caseStatus" name="caseStatus" type="text" value={this.state.caseStatus} 
            onChange={(e) => {
                this.insertCase(e);
              }}/>
              <br/>
            <label>Case Priority:</label>
              <input id="priority" name="priority" type="text" value={this.state.priority} 
            onChange={(e) => {
                this.insertCase(e);
              }}/>
              <br/>
            <label>Case Type:</label>
              <input id="caseType" name="caseType" type="text" value={this.state.caseType} 
            onChange={(e) => {
                this.insertCase(e);
              }}/>
              <br/>
            <label>Due Date:</label>
              <input id="dueDate" name="dueDate" type="text" value={this.state.dueDate} 
            onChange={(e) => {
                this.insertCase(e);
              }}/>
              <br/>
            <label>Assigned To:</label>
              <input id="assignedTo" name="assignedTo" type="text" value={this.state.assignedTo} 
            onChange={(e) => {
                this.insertCase(e);
              }}/>

          </form>
          <button onClick={(e)=>{
            this.props.pushCaseSomething(e,this.state)
          }}>Submit Form</button> 

        </div>
      );
    }
  }


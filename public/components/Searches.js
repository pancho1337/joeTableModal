
class Searches extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        caseStatus: "",
        priority: "",
        assignedTo: "",
        caseType: "",
        dueDate: ""
      };
      this.caseSelector = this.caseSelector.bind(this);
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
    caseSelector(e) {
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
      <div className= "box">
        <form onSubmit={(e)=>{
            this.props.caseFilter(e,this.state)
          }}>
            <label>Case Status:</label>
            <select
              onChange={(e) => {
                this.caseSelector(e);
              }}
              name="caseStatus"
              id="caseStatus"
              value = {this.state.caseStatus}
              //selected = {this.state.caseStatus}
            >
              <option value="">No Selection</option>
              <option value="Active">Active</option>
              <option value="Pending">Pending</option>
              <option value="Resolved">Resolved</option>
            </select>
            <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Case Priority:</label>
            <select
              onChange={(e) => {
                this.caseSelector(e);
              }}
              name="priority"
              id="priority"
              value = {this.state.priority}
            >
              <option value="">No Selection</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
            <br/>
            <label>Assigned To:</label>
            <select
              onChange={(e) => {
                this.caseSelector(e);
              }}
              name="assignedTo"
              id="assignedTo"
              value = {this.state.assignedTo}
            >
              <option value="">No Selection</option>
              <option value="Pete">Pete</option>
              <option value="Pancho">Pancho</option>
              <option value="Tom">Tom</option>
            </select>
            <label>&nbsp;&nbsp;&nbsp;Case Type:</label>
            <select
              onChange={(e) => {
                this.caseSelector(e);
              }}
              name="caseType"
              id="caseType"
              value = {this.state.caseType}
            >
              <option value="">No Selection</option>
              <option value="IT">IT</option>
              <option value="Maintenance">Maintenance</option>
              <option value="Repair">Repair</option>
            </select>
            <br/>
            <label>Due Date:</label>
            <select
              onChange={(e) => {
                this.caseSelector(e);
              }}
              name="dueDate"
              id="dueDate"
              value = {this.state.dueDate}
            >
              <option value="">No Selection</option>
              <option value="One_Week">1 Week</option>
              <option value="One_Month">1 Month</option>
              <option value="Two_Months">2 Months</option>
            </select>
            <br></br>
            <br></br>
            <input type="submit" value="Apply Filter" />
            <button onClick={(e)=>{this.clearFilter(e)}}>Clear Filter</button>
          </form>
        </div>
      );
    }
  }


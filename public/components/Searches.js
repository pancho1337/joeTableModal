
class Searches extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        caseStatus: null,
        priority: null,
        assignedTo: null,
        caseType: null,
        dueDate: null
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
        <div>
          <h1>{this.props.trigger}</h1>
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
            >
              <option value="">No Selection</option>
              <option value="Active">Active</option>
              <option value="Pending">Pending</option>
              <option value="Resolved">Resolved</option>
            </select>
            <label>Case Priority:</label>
            <select
              onChange={(e) => {
                this.caseSelector(e);
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
                this.caseSelector(e);
              }}
              name="assignedTo"
              id="assignedTo"
            >
              <option value="">No Selection</option>
              <option value="Pete">Pete</option>
              <option value="Pancho">Pancho</option>
              <option value="Tom">Tom</option>
            </select>
            <label>Case Type:</label>
            <select
              onChange={(e) => {
                this.caseSelector(e);
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
                this.caseSelector(e);
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


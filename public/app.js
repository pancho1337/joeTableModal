var Modale = function (){
  return(
    <div>
      <h2>This will be were thing you have issues it will also take its state from the app parent</h2>
    </div>
  )
}

var Table = function(){
  return (
    <div>
      <h2> The table info will go here, It will take the info from the props object </h2>
    </div>
  )
} 

var Searches = function(){
  return (
    <div>
      <h2>Theres going to be some inputs here</h2>
    </div>
  )
}

var App = function() {
  return(
    <div>
     <h3>Arrrggghhh... Give me Tacos...</h3>
     <h2>State. only have 2 things to reduce complexity caseID and caseStatus</h2>
     <Searches />
     <Table />
     <Modale />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))


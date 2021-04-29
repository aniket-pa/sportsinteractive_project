//import logo from './logo.svg';
import './App.css';
import react from 'react';
import DirectoryComponent from './component/directoryComponent/directory.component';
import SearchComponent from './component/searchComponent/search.component';

class App extends react.Component {
  constructor(props){
    super(props);
    this.state={
      teamList:[],
      playerList:[]
    }
  }

  componentDidMount(){
    fetch('https://api.npoint.io/20c1afef1661881ddc9c')
    .then(res => res.json())
    .then(data => {
      //console.log(data)
        this.setState({
          playerList:data.playerList,
          teamList:data.teamList,
          targetedName:''
        } )
      })
  }

  handleChange=(event)=>{
      const nameValue = event.target.value;
      this.setState({
        targetedName:nameValue
      })
  }

  render(){
    let {playerList,teamList,targetedName} =this.state;

    const NewPlayerList= playerList.filter( player => player.PFName.toLowerCase().includes(targetedName.toLowerCase()) )

    return (   
      <div>
        <SearchComponent handleChange={this.handleChange} placeholder="Search Player" />
        <DirectoryComponent  playerList={NewPlayerList} />
      </div>
    );
  }
  
}

export default App;

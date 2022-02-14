import React  from "react";


class Profile extends React.Component{
    constructor(){
        super()
        this.state={
          count: 0,
          fullName: 'Imen TLILI',
          bio: 2020,
          imgSrc:'myPhoto',
          profession: 'electrical engineer'
        }
    }
    componentDidMount(){
      setInterval(() => {
        this.setState({count : this.state.count+1})
      }, 1000);
    }
    
        render(){
        return (
        <div className='profil'>
        <h1>My name is {this.state.fullName}</h1>
        <p>and since {this.state.bio} I enjoy with codes</p>
        <h2>so, I become a {this.state.profession}</h2>
        <img className=' img' src='./photo.jpg' alt={this.state.imgSrc}></img>
        
        
        <h3>{this.state.count}</h3>




        </div>
    )
  }

}
export default Profile;

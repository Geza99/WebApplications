
import React from 'react';
import logo from './logo.svg';
import Avatar from './component/Avatar';
import Faker from 'faker'

class App extends React.Component{

  constructor(props)
  {
    super(props);
    
    this.state={
      city: " ",
    };

    this.cities=[
       {name:'San Francisco'},
       {name:'Tokyo'},
       {name:'Caracas'},
       {name:'Berlin'},
    ];
    }
 cityClicked(name){
   console.log(`CityClicked called on ${name}`);
   this.setState(()=>{
     return{
       city:name
     };
   });
 }

  displayCities() {
    return this.cities.map((city) => {
    return(
      <li key={city.name} onClick={()=>this.cityClicked(city.name)}>{city.name}</li>
    );
    });
  }

  render()
  {
    
    return(
    <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
      <h1 style={{color: 'red'}}> Cities</h1>
        <ul style={{color:'orange'}}>
        {this.displayCities()}
        </ul>
       <h1 style={{fontSize:15,color:'green'}}> actual city: {this.state.city}</h1>
       <h1 style={{color: '#eeee00',font:'bold',fontFamily:'sans-serif'}}>Avatars</h1>
       <h1 style={{backgroundColor:'gray',fontSize:15}}> 
      <Avatar name = 'Szekely Geza' age={22} fakerImg={Faker.image.avatar()}/> 
      </h1>
      <h1 style={{backgroundColor:'gray',fontSize:15}}>
      <Avatar name = 'Szekely Geza' age={22} fakerImg={Faker.image.avatar()}/>
      </h1>
      <h1 style={{backgroundColor:'gray',fontSize:15}}>
      <Avatar name = 'Szekely Geza' age={22} fakerImg={Faker.image.avatar()}/>
      </h1>
    </div>
    );
  }
}

export default App;

import React, { Component } from 'react'
import './Avatar.css';
import Avatarlist from'./Avatarlist';
import 'tachyons'


	class Avatar extends Component{
		constructor(){
			super();
			this.state = "welcome TO Avatar World"
		}

		namechange(){
			this.setState({
				name : "welcome TO Avatar World of pps"
			}) 
		}

		render(){

			 const Arraylist =[

     {
     	name:"Khala",
          work:"webdeveloper"

      },
      {
     	name:"Alala",
        work:"webdeveloper"

      },
      {
     	name:"BAl",
        work:"webdeveloper"

      },
      {
     	name:"Sal",
        work:"webdeveloper"

      }

   ]

const arrayavatar = Arraylist.map( (bal,i) => {
   
   return 	  <Avatarlist key={i}  name={Arraylist[i].name} work={Arraylist[i].work}  />




}
)



	return (
		<div className="pps">
		<h1 className=" tc">{this.state} </h1>

             	{arrayavatar}

	<button onClick = { () => this.namechange() }> Submit </button>

</div>

		)

	}

}

  



export default Avatar;
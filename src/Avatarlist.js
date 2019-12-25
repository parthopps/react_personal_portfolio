 import React from 'react';

 const Avatarlist = (props) => {
 
return (
 		<div className="avatarstyle ma4 bg-light-purple dib p4 grow   tc">
	<img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="avatar" />
	<h1 className=""> {props.name} </h1>
     <h1 className=""> {props.work} </h1>

	</div>


 		)

 }

export default Avatarlist;

	

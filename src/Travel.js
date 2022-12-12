import { Component } from "react";
import passport from './passport.png'


 export class Travel extends Component{
    state = {
        userInput:'',
        travelList:[]

    } 

onChangeEvent(e){
    this.setState({userInput: e})

}
addItem(input){
    if (input ===''){
        alert('Please enter an item!')
    } else{
    let listArray = this.state.travelList;
    listArray.push(input)
    this.setState({travelList: listArray, userInput:''})
    }
}

crossWord(event){
const li = event.target;
li.classList.toggle('crossed')
}
deleteItem(){
    let listArray = this.state.travelList;
    listArray = []
    this.setState({travelList: listArray})
}

onSubmitEvent=(e)=>{
    e.preventDefault();
   
}
    render(){
    return(
        <div>
            <form onSubmit={this.onSubmitEvent}>
            <div className="container" >
            <input
            type='text'
            placeholder="Type your dream destination here"
            onChange={(e) => {this.onChangeEvent(e.target.value)}}
            value={this.state.userInput}/>
            </div>
        
        <div className="container" >
            <button className="add" onClick={()=>this.addItem(this.state.userInput)}>Add</button>
        </div>

<ul>
    {this.state.travelList.map((item,index)=>(<li key={index} onClick={this.crossWord} >
       <img src={passport} width='40px' alt="check"/> {item}</li>))}
</ul>
<div className="container">
    <button className="delete" onClick={()=>this.deleteItem()}>Delete</button>
</div>
</form>
         </div>
    )
 }
 }


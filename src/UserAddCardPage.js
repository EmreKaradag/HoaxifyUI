import React from 'react';

class UserAddCardPage extends React.Component{

  state = {
    title : null,
    description: null
  };
  onChangeTitle = event => {
    this.state.title = event.target.value;
    console.log(event.target.value);

  }

  onChangeDescription = event =>{
    this.state.description = event.target.value;
    console.log(event.target.value);
  }

    render(){
        return (
            <form>
          <div>
          <label>Title</label>
          <input onChange={this.onChangeTitle}/>
          </div>
          <div>
          <label>Description</label>
          <input onChange={this.onChangeDescription}/>
          </div>
        </form>
          
        );
    }

}

export default UserAddCardPage;
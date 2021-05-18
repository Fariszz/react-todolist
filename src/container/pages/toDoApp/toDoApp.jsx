import React, {Component, Fragment} from 'react';
import './toDoApp.css';
import Post from '../../../component/Post/Post';
import axios from 'axios';

class toDoApp extends Component{

    state = {
        post: [],
        formToDo:{
            id: 1,
            title: '',
            userId: 1
        }
    }

    getPostAPI = () =>{
        axios.get('http://localhost:3004/posts?_sort=id')
        .then((result) => {
            this.setState({
                post: result.data
            })
        })
    }

    postDataToAPI = () =>{
        axios.post('http://localhost:3004/posts', this.state.formToDo).then((res) => {
            console.log(res)
            this.getPostAPI()
            this.setState({
                formToDo:{
                    id: 1,
                    title: '',
                    userId: 1
                }
            })
        }, (err) => {
            console.log('err', err)
        })
    }

    handleFormChange = (event) =>{
        let formToDoNew = {...this.state.formToDo}
        let timeStamp = new Date().getTime()
        formToDoNew['id'] = timeStamp
        formToDoNew[event.target.name] = event.target.value
        this.setState({
            formToDo: formToDoNew
        }, () =>{
            console.log('Value obj form formToDo', this.state.formToDo)
        })
    }

    handleSubmit = () =>{
        this.postDataToAPI()
    }

    componentDidMount(){
        this.getPostAPI()
    }

    render(){
        return(
            <Fragment> 
                <div className="form-todo">
                    <h1>ToDoList App</h1>
                    <textarea name="body" id="body" cols="30" rows="5" placeholder="Add ToDo" value={this.state.formToDo.body} onChange={this.handleFormChange}>                    
                    </textarea>                    
                    <button type="submit" className="btn-submit" onClick={this.handleSubmit}>Submit</button>
                </div>          
                {
                    this.state.post.map(post => {
                        return <Post key={post.id} data={post} />
                    })
                }                                        
            </Fragment>
            
        )
    }
}

export default toDoApp;
import React, {Component} from 'react';



class List extends Component {
state ={
    items:[

    ]
}
componentDidMount(){


fetch('/api/items')
.then(res => res.json())
.then(data =>  this.setState({ items:data }));
}
    render(){
        const { items } = this.state;
        return(
            <div>
                <input type="text" ref="newitem" />
                <button onClick={
                    () => {if(this.refs.newitem.value){
                        fetch('/api/items',{
                            method: 'POST',
                            headers:{
                                'content-type':'application/json'
                            },
                            body: JSON.stringify({name:this.refs.newitem.value})
                        }).then(res => res.json())
                        .then(data => console.log(data))
                        this.setState(state => ({
                            items:[{name:this.refs.newitem.value},...state.items]
                        }));
                    }}
                } >Add</button>
                <ul>
                    {items.map((name) => (
                        <li key={name.name}>{name.name}<button onClick={
                            () =>{
                                fetch(`/api/items/${name._id}`,{
                                    method: 'DELETE',

                                }).then(res => res.json()).then(ttt => console.log(ttt))
                                this.setState(state =>({
                                    items: state.items.filter(item => item.name !== name.name)
                                }));
                            }
                        }>delete</button></li>
                    ))}
                </ul>
            </div>
        )
    }

}


export default List;
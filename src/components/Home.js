import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, Button, CardText } from 'reactstrap'


class Home extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            cardItems : [
                {   
                    id: 0,
                    title: 'Create Notice',
                    img: require('./../assets/img/Notice.jpg'),
                    content: 'Any group Secy or Gensec has rights to add notice! But it will be approved by Gensec.',
                    link1: ['Add Notice','/create/notice'],
                    link2: ['All Notices','/notices']
                },
                {
                    id: 1,
                    title: 'Create Achievement',
                    img: require('./../assets/img/Notice.jpg'),
                    content: 'Only Gensec has rights to add an acheivement!',
                    link1: ['Add Achievement ','/create/achievement'],
                    link2: ['All Achievements','/achievements']
                },
                {   
                    id: 2,
                    title: 'Create Award',
                    img: require('./../assets/img/Notice.jpg'),
                    content: 'Only Gensec has rights to add an award!',
                    link1: ['Add Award','/create/award'],
                    link2: ['All Awards','/awards']
                },
                {
                    id: 3,
                    title: 'Create Project',
                    img: require('./../assets/img/Notice.jpg'),
                    content: 'Any group Secy or Gensec has rights to add project!',
                    link1: ['Add Project','/create/project'],
                    link2: ['All Projects','/all/projects']
                },
                {
                    id: 4,
                    title: 'Create Event (Calender Update)',
                    img: require('./../assets/img/Notice.jpg'),
                    content: '',
                    link1: ['Add Event','/create/event'],
                    link2: ['Calender','/calender']
                },
            ]
        };
    }
    
    render() { 
        return (
            <div className="home">
                <div className="container">
                    <div className="row">
                        {this.state.cardItems.map((item)=>{
                            return (
                                <div key={item.id} className="col-12 col-md-4 col-lg-4" style={{paddingBlock:"20px"}}>
                                    <Card>
                                        <CardBody>
                                            <CardTitle><h5> {item.title} </h5></CardTitle>
                                        </CardBody>
                                        <img width="100%" src={item.img} alt={item.title} />
                                        <CardBody>
                                            <div className="row container">
                                                <CardText> {item.content} </CardText><br />
                                            </div>
                                            <div className="row">
                                                <div className="col-6 col-sm-6">
                                                    <Button className="btn-block" href={item.link1[1]}> {item.link1[0]} </Button>
                                                </div>
                                                <div className="col-6 col-sm-6">
                                                    <Button className="btn-block" href={item.link2[1]}> {item.link2[0]} </Button>
                                                </div>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </div>
                            );
                        })}
                        
                    </div>
                </div> 
            </div>            
        );
    }
}
 
export default Home;
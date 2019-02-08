import React, { Component } from 'react';
import IndexCard from './IndexCard';



export default class IndexActivities extends Component {
  constructor(props){
    super(props);
    this.state = {activities: []}

  }


  async componentDidMount() {
    return await this.setState({activities: [{name: 'DeBray', imgUrl: 'https://i1.wp.com/sfbayview.com/wp-content/uploads/2013/01/TaLea-Monet-Carpenter-DeBray-Fly-Benzo-Carpenter-wedding-121212-by-Malaika-web.jpg?resize=324%2C160&ssl=1'}, {name: 'DeBray 2', imgUrl: 'https://avatars3.githubusercontent.com/u/16482448?s=460&v=4'}]});
  }


  render() {
    let {activities} = this.state;
    return (
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
        <div className="carousel-inner">
          {activities.map((activity, index) => {
            if (index === 0){
              return (
                <IndexCard
                classList="carousel-item active"
                key={activity.name}
                name={activity.name}
                imgUrl={activity.imgUrl}
                />
              )
            } else {
              return (
                <IndexCard
                classList="carousel-item"
                key={activity.name}
                name={activity.name}
                imgUrl={activity.imgUrl}
                />
              )
            }
          })}
        <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a onClick={console.log('yee')} className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
    )
  }
}

// const IndexActivities = () => (
//   <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
//     <div className="carousel-inner">
//       <div className="carousel-item active">
//         <img src="..." className="d-block w-100" alt="..."/>
//       </div>
//       <div className="carousel-item">
//         <img src="..." className="d-block w-100" alt="..."/>
//       </div>
//       <div class="carousel-item">
//         <img src="..." className="d-block w-100" alt="..."/>
//       </div>
//     </div>
//     <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
//       <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//       <span className="sr-only">Previous</span>
//     </a>
//     <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
//       <span className="carousel-control-next-icon" aria-hidden="true"></span>
//       <span className="sr-only">Next</span>
//     </a>
//   </div>
// );
//
// export default IndexActivities;

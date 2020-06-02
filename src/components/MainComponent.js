import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import DishDetail from './DishdetailComponent';
import Home from './HomeComponent'
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';
import { Switch, Route, Redirect } from 'react-router-dom';
import Dishdetail from './DishdetailComponent';


class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
        comments: COMMENTS,
        promotions: PROMOTIONS,
        leaders: LEADERS
    };
  }

  

  render() {
    const HomePage = () => {
      return(
          <Home dish={this.state.dishes.filter((dish)=> dish.featured)[0]}
          promotion={this.state.promotions.filter((promo)=> promo.featured)[0]}
          leader={this.state.leaders.filter((leader)=> leader.featured)[0]} 
          />
      );
    }

    const DishWithId = ({match}) =>{
      return (
        <Dishdetail dish={this.state.dishes.filter((dish)=>dish.Id=== parseInt(match.params.dishId,10))[0]}
          comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
        />
      );

    }

    return (
      <div>
        <Header />
        <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
              <Route path='/mennu/:dishId' component={DishWithId} />
              <Route exact path= '/contactus' component={Contact} />
              <Route path= '/aboutus' component={About} />
              <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  
}
}
export default Main;
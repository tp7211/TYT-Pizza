import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <h1>Who are we</h1>
        <p>
        Always our best food, made especially for you.
        "TYT Pizza's mission is to make each and every occasion with us an enjoyable and memorable experience for both our customers and our team members. 
        TYT is Canada's favourite pizza chain for a lot of reasons, but the most important one is our people.
        In business since 2021, Our Pizza Company is a fast food restaurant offering delivery and take-out food service, commercial and institutional catering.
        We believe that each of us can benefit from making smarter decisions about what's in our food, how we treat each other, and how we protect this wonderful planet we all share.
        We believe in Here and Now. To us, that means fresh dough, NEVER FROZEN, made in-house each day simply from unbleached flour, filtered water, extra-virgin olive oil, salt, and a touch of sugar.
        No chemicals. No additives. No kidding. We’ve also nixed the nitrites from our cured meats, switched to “true hue” banana peppers and olives without artificial colors, and created our own salad dressings, leaving the artificial preservatives behind.


        </p>
        <h1>Our Speciality</h1>
        <Row>
          <Col md={6}>
            <p>
            pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil, oregano, tomato, olives, mozzarella or other cheese, and many other ingredients, baked quickly—usually, in a commercial setting, using a wood-fired oven heated to a very high temperature—and served hot.
            One of the simplest and most traditional pizzas is the Margherita, which is topped with tomatoes or tomato sauce, mozzarella, and basil. 
            Popular legend relates that it was named for Queen Margherita, wife of Umberto I, who was said to have liked its mild fresh flavour and to have also noted that its topping colours—green, white, and red—were those of the Italian flag.
            Pizza is sold fresh or frozen, and whole or in portion-size slices. Methods have been developed to overcome challenges such as preventing the sauce from combining with the dough, and producing a crust that can be frozen and reheated without becoming rigid. 
            </p>
          </Col>
          <Col md={6}>
            <p>
            In restaurants, pizza can be baked in an oven with fire bricks above the heat source, an electric deck oven, a conveyor belt oven, or, in traditional style in a wood or coal-fired brick oven. 
            The pizza is slid into the oven on a long paddle, called a peel, and baked directly on hot bricks, a screen (a round metal grate, typically aluminum), or whatever the oven surface is. 
            Before use, a peel is typically sprinkled with cornmeal to allow the pizza to easily slide on and off it.
            When made at home, a pizza can be baked on a pizza stone in a regular oven to reproduce some of the heating effect of a brick oven. 
            Cooking directly on a metal surface results in too rapid heat transfer to the crust, burning it.
            Some home chefs use a wood-fired pizza oven, usually installed outdoors. As in restaurants, these are often dome-shaped, as pizza ovens have been for centuries, in order to achieve even heat distribution. 
            Another variation is grilled pizza, in which the pizza is baked directly on a barbecue grill. 
            Greek pizza, like deep dish Chicago and Sicilian style pizza, is baked in a pan rather than directly on the bricks of the pizza oven.
            </p>
          </Col>
        </Row>
        <Row>
          <h1>Our Chef</h1>
          <Col md={3}>
          Our chef remains rooted in the belief that food should be simple and made with passion, while embracing the fruitful land and community values that Canadians hold dear.
          He works hard to preserve the harmonious marriage between his culinary heritage and love for the place he now calls home, by innovating on Italian classics using homegrown ingredients, and by bringing a creative and forward-thinking approach to well-known recipes and pizzeria favourites.
          </Col>
          
          <Col md={3}>
          Substantial experience in using large scale pizza cooking equipments.
          Deep knowledge of pastries and cakes baking procedures.
          Huge knowledge of latest trends prevailing in food industry.
          Good understanding of various pizzas preparing techniques.
          </Col>
          
          <Col md={3}>
          Skilled at using wood-fired oven efficiently for preparing pizza.
          Familiarity about making different variants of Non-Veg and Veg Pizza.
          Ability to control stock and meticulously issues items from stock.
          Ability to make pizza with complete details effectively and efficiently.
          </Col>

          <Col md={3}>
          After drawing inspiration from the Neapolitan pizza tradition native to Naples, Pizzeria Libretto opened its Ossington location in August of 2008. 
          Committed to delivering a true southern Italian experience, we were one of the first restaurants in GTA to proudly serve VPN certified pizza within the strict guidelines laid out by the Napoli government.
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;

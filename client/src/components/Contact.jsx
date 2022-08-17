import React from "react";
import { Container, Row, Col, Table, Image } from "react-bootstrap";
import { FiPhoneCall } from "react-icons/fi";
import { ImMobile } from "react-icons/im";
import { AiOutlineMail } from "react-icons/ai";
const Contact = () => {
  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <Row>
          <Col md={6}>
            <h1>Techinfo YT Pizza Shop</h1>
            <p>
            Always our best food, made especially for you.
            "TYT Pizza's mission is to make each and every occasion with us an enjoyable and memorable experience for both our customers and our team members. 
            TYT is Canada's favourite pizza chain for a lot of reasons, but the most important one is our people.
            In business since 2021, Our Pizza Company is a fast food restaurant offering delivery and take-out food service, commercial and institutional catering.
            We believe that each of us can benefit from making smarter decisions about what's in our food, how we treat each other, and how we protect this wonderful planet we all share.
            We believe in Here and Now. To us, that means fresh dough, NEVER FROZEN, made in-house each day simply from unbleached flour, filtered water, extra-virgin olive oil, salt, and a touch of sugar.
            No chemicals. No additives. No kidding. We’ve also nixed the nitrites from our cured meats, switched to “true hue” banana peppers and olives without artificial colors, and created our own salad dressings, leaving the artificial preservatives behind.

            </p>

            <Table striped bordered hover className="text-center">
              <thead>
                <tr>
                  <th className="bg-warning text-center" colSpan={3}>
                    --- Contact Details ---
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <FiPhoneCall />
                  </td>
                  <td>Phone</td>
                  <td>519-778-4217</td>
                </tr>
                <tr>
                  <td>
                    <ImMobile />
                  </td>
                  <td>Call</td>
                  <td>1234567890</td>
                </tr>
                <tr>
                  <td>
                    <AiOutlineMail />
                  </td>
                  <td>Email</td>
                  <td>TYT7211@gmail.com</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col md={6}>
            <Image
              src="images/farmhouse.jpg"
              style={{ width: "100%", height: "100%" }}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;

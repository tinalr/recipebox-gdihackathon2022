// import React, { useEffect, useState } from 'react';
// import { Container, Col, Button, Row, CardBody } from "reactstrap";
// import { Link } from 'react-router-dom';

// const Categories = (props) => {

//   const [dietType, setDietType] = useState('');
//   const [foodIntolerances, setIntolerances] = useState([]);

//   console.log(dietType);
//   console.log(foodIntolerances)

//   return (
//     <>
//       <div class="catergories-header">
//         <h1 class="categories-header">Select a Category</h1>
//         <button onClick={()=>props.func('It works?')}>CLICK ME</button>
//       </div>
//       <Container className="cards-container">
//         {/* Card 1  */}
//         <Row xs="2">
//           <Col className="categories-col">
//             <img alt="Card" src="https://picsum.photos/300/200" />
//             <CardBody>
//               <Button onClick={() => setDietType('vegetarian')}>VEGETARIAN</Button>
//             </CardBody>
//           </Col>

//           {/*Card 2   */}
//           <Col className="categories-col">
//             <img alt="Card" src="https://picsum.photos/300/200" />
//             <CardBody>
//               <Button onClick={() => setIntolerances((intolerance) => [...intolerance, 'peanut'])}>PEANUT FREE</Button>
//             </CardBody>
//           </Col>
//         </Row>

//         {/*Card 3   */}

//         <Row xs="2">
//           <Col className="categories-col">
//             <img alt="Card" src="https://picsum.photos/300/200" />
//             <CardBody>
//               <Button onClick={() => setIntolerances((intolerance) => [ ...intolerance, 'gluten'])}>GLUTEN FREE</Button>
//             </CardBody>
//           </Col>

//           {/*Card 4   */}
//           <Col className="categories-col">
//             <img alt="Card" src="https://picsum.photos/300/200" />
//             <CardBody>
//               <Button onClick={() => setIntolerances((intolerance) => [...intolerance, 'seafood'])}>SEAFOOD FREE</Button>
//             </CardBody>
//           </Col>
//         </Row>

//         {/* Card 5  */}
//         <Row xs="2">
//           <Col className="categories-col">
//             <img alt="Card" src="https://picsum.photos/300/200" />
//             <CardBody>

//               <Button onClick={() => setDietType('vegan')}>VEGAN</Button>

//             </CardBody>
//           </Col>

//           {/*Card 6  */}
//           <Col className="categories-col">
//             <img alt="Card" src="https://picsum.photos/300/200" />
//             <CardBody>
//               <Button onClick={() => setIntolerances((intolerance) => [...intolerance, 'dairy'])}>DAIRY FREE</Button>
//             </CardBody>
//           </Col>
//         </Row>

//         {/*Card 7  */}
//         <Row xs="2">
//           <Col className="categories-col">
//             <img alt="Card" src="https://picsum.photos/300/200" />
//             <CardBody>
//               <Button onClick={() => setIntolerances((intolerance) => [...intolerance, 'treenut'])}>TREENUT FREE</Button>
//             </CardBody>
//           </Col>

//           {/*Card 8 */}
//           <Col className="categories-col">
//             <img alt="Card" src="https://picsum.photos/300/200" />
//             <CardBody>
//               <Button onClick={() => setIntolerances((intolerance) => [...intolerance, 'soy'])}>SOY FREE</Button>            </CardBody>
//           </Col>
//         </Row>
//       </Container>
//     </>
//   );
// };

// export default Categories;

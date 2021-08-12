import React from 'react';
import PropTypes from "prop-types";

/*
props = 속성, argument 
*/

//react의 모든 요소들은 각각 유일성을 띄어야 함.

const foodILike = [
  {
    id :1,  // list 내의 child는 각각의 유일성을 가지고 있어야기하기 때문에 id를 추가
    name : "Kimchi",
    image :
      "https://kelliesfoodtoglow.com/wp-content/uploads/2016/10/kimchi1.jpg",
    rating : 5
  },
  {
    id:2,
    name : "Samgyeopsal",
    image:
      "https://www.gildedgingerbread.com/wp-content/uploads/2017/08/Samgyeopsal-1.jpg",
      rating : 4.4
  },
  {
    id:3,
    name: "Bibimbap",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Dolsot-bibimbap.jpg/1200px-Dolsot-bibimbap.jpg",
    rating : 5
  },
  {
    id:4,
    name: "Doncasu",
    imgae:
      "https://s3-media4.fl.yelpcdn.com/bphoto/anesu6IAyAj2d6r19eFqEg/o.jpg",
    rating : 3.7
  },
  {
    id:5,
    name: "Kimbap",
    image:
      "https://www.maangchi.com/wp-content/uploads/2013/09/kimbap.jpg",
    rating : 4.8
  }
];


function Food({name, picture, rating}) {    //props.fav == { fav }
  //console.log(props.fav);
  return (
  <div>
       <h1>I like {name}</h1>
       <h4>{rating}/5.0 </h4>
       <img src={picture} alt={name} /> 
  </div>
  );
}

Food.propTypes = {  //꼭 propTypes로 작성해야함
  name : PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  rating : PropTypes.number.isRequired
};

//propTypes는 잘못된 변수 이름 사용이나 잘못된 형태(number > string 등)를 사용한 경우 console을 통해 warning을 알려줌.
//isRequired를 작성하면 필수로 필요로 하기에 내용이 없다면 오류가 나지만, isRequired 가 없다면 상관 X > 작성하지 않아도 O

function renderFood(dish){
  //console.log(dish);
  return <Food name={dish.name} picture={dish.image} />
}

function App() {
  return (
  <div>
    <h1>Hello!!!!</h1>
    {foodILike.map(dish =>(
        <Food 
        key={dish.id}
        name={dish.name} 
        picture={dish.image} 
        rating = {dish.rating}
        />
    ))}
  </div>
  );
}

//key는 react 내부에서 사용하기 위한 것으로 각각의 요소의 유일성을 위해 필요한 것.

/*
  {console.log(foodILike.map(renderFood))}
    {foodILike.map(renderFood)}
  ==
  {foodILike.map(dish =>(
        <Food name={dish.name} picture={dish.image} />
    ))}
*/

/*
const friends = ["dal", "mark", "lynn", "japan guy"]

friends.map(current) {
  console.log(current);
  return 0;
})

friends.map(function(friend){})

friends.map(function(friend){
  return friend + "❤"
})
*/

export default App;

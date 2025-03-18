import React from 'react';
import Card from './Card';

const data = [
//sofa 
  {
    imageUrl: 'https://i.pinimg.com/564x/f2/04/9e/f2049ebd92777a4d2b56dcd4f8d0b3b7.jpg',
    name: 'KIWAMI SOFA',
    color: 'cadetblue',
    model: 'W1800 ',
    price: '142,199',
  },
  {
    imageUrl: 'https://i.pinimg.com/564x/35/8f/4e/358f4e1c1732126d1daea0ef16153b94.jpg',
    name: 'Scandinavian Pillow Top Arm Sofa',
    color: 'Pink',
    model: 'Standard',
    price: '47,847',
  },
  {
    imageUrl: 'https://i.pinimg.com/564x/e3/c5/77/e3c577d55536f84b9e8795b7a2a6a3c3.jpg',
    name: 'Leather Match Square Arm Modular Sofa',
    color: 'Black',
    model: 'Black Leather Match',
    price: '108,907',
  },
  {
    imageUrl: 'https://i.pinimg.com/564x/a2/c4/c9/a2c4c9e1c609eb403b2ebe9bdc20b57f.jpg',
    name: 'Cloud Sofa ',
    color: 'White',
    model: 'Modern Style',
    price: '161,130',
  },


//lamp
  {
    imageUrl: 'https://i.pinimg.com/564x/b5/8f/0c/b58f0c8b13504c44b3af8ddf42beba52.jpg',
    name: 'Tower Jellyfish Lamp',
    color: 'Blue',
    model: 'Table Lamp',
    price: '1,674.49',
  },
  {
    imageUrl: 'https://i.pinimg.com/564x/81/99/d3/8199d3f19234b7ed515fe1e1be3f73ed.jpg',
    name: 'Tomato Table Lamp',
    color: 'Green, Red',
    model: 'Table Lamp',
    price: '7,752',
  },
  {
    imageUrl: 'https://i.pinimg.com/564x/69/58/e3/6958e395fca619509613da15f249deb1.jpg',
    name: 'AfraliaNordic LED Wall Lamps',
    color: 'Black',
    model: 'Wall lamp',
    price: '3,099',
  },
  {
    imageUrl: 'https://i.pinimg.com/564x/2c/9a/10/2c9a10b1c57d1cc6a81621f097d0cbee.jpg',
    name: 'White Jade Glass Pendant Light',
    color: 'White, red',
    model: 'Ceiling lamp',
    price: '2,063',
  },

//Coffee Table
  {
    imageUrl: 'https://i.pinimg.com/736x/1b/2f/9c/1b2f9ceb07ece2e1acfeac179937bbe3.jpg',
    name: 'MIINO White Coffee Table',
    color: 'Cream White',
    model: 'Coffee Table',
    price: '9,717.56',
  },
  {
    imageUrl: 'https://i.pinimg.com/564x/b4/19/60/b419600aafa7d6f68ff08e1ebba0cb63.jpg',
    name: 'Brenson Coffee Table',
    color: 'Transparent',
    model: 'Coffee Table',
    price: '5,518.42',
  },
  {
    imageUrl: 'https://i.pinimg.com/564x/28/19/2a/28192aa62419d5c3b93be46ffc5416cf.jpg',
    name: 'Eve Pebble Shaped Coffee Table',
    color: 'Black',
    model: 'Coffee Table',
    price: '9,952.13',
  },
  {
    imageUrl: 'https://i.pinimg.com/736x/c2/ad/0d/c2ad0d33b2223d34b9190e62772a85a2.jpg',
    name: 'Glass Top Coffee Table',
    color: 'Orange',
    model: 'Coffee Table',
    price: '88,130.96',
  },
];

const Content = () => {
  return (
    <div className="content">
      {data.map((item, index) => (
        <Card key={index} {...item} />
      ))}
    </div>
  );
};

export default Content;


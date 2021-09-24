import React, { useState } from 'react';
import './style.css';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end javascript framework',
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite JS library among engineers',
  },
  {
    title: 'How do you use React?',
    content: 'You use React by creating components',
  },
];

const options = [
  {
    label: 'The color red',
    value: 'Red',
  },
  {
    label: 'The color green',
    value: 'Green',
  },
  {
    label: 'The color yellow',
    value: 'Yellow',
  },
];

export default function App() {
  return (
    <div>
      <Translate />
    </div>
  );
}

import React from 'react';
import Header from '../header/Header.jsx';
import Tours from '../tours/Tours.jsx';
import Footer from '../footer/Footer.jsx';
import data from '../../data/db.json';
import "./Home.css";

export default function Home() {
  return (
    <>
    <Header />
    <Tours tour={data} />
    <Footer />
   
    </>
  )
}
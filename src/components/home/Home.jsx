import React from 'react';
import Header from '../header/Header.jsx';
import Tours from '../tours/Tours.jsx';
import Footer from '../footer/Footer.jsx';
import "./Home.css";

export default function Home({data}) {
  return (
    <>
    <Header />
    <Tours tour={data} />
    <Footer />
   
    </>
  )
}
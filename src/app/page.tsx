"use client";

import { NextPage } from "next/types";
import React, { useState } from "react";

import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Footer from "./components/Footer";

const MainPage: NextPage = () => {
  const [lang, setLang] = useState<string>("es-ES");

  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  );
};

export default MainPage;
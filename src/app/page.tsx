"use client";

import { NextPage } from "next/types";
import React, { useState } from "react";

import Header from "./components/main/Header";
import Content from "./components/main/Content";
import Footer from "./components/main/Footer";

const MainPage: NextPage = () => {

  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  );
};

export default MainPage;
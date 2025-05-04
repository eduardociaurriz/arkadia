"use client";

import { NextPage } from "next/types";
import React, { useState, useEffect } from "react";

import Loading from "./components/loading";
import TopMenu from "./components/Topmenu";
import BotMenu from "./components/Botmenu";


const MainPage: NextPage = () => {

  useEffect(() => {

  }, []);

  return (
    <>
      <TopMenu />
      <BotMenu />
    </>
  );
};

export default MainPage;

import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import { BiWorld } from "react-icons/bi";

const Home = () => {
  const { t, i18n } = useTranslation();

  return (
    <main className="bg-slate-300 container mx-auto mt-20 flex flex-col items-center  gap-2 ">
      <h1>Multi-language app</h1>
      <BiWorld size={44} />

      <h1>{t("Home")}</h1>
    </main>
  );
};
export default Home;

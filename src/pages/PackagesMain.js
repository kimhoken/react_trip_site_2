import React from "react";
import "./PackagesMain.css";
import AdSlider from "./AdSlider";
import { DomesticPackageList } from "../Packages/DomesticPackageList";
import { PackageList } from "../Packages/PackageList";

const PackagesMain = () => {
  const c_cardchoice = [1, 14, 20];
  const d_cardchoice = [101];

  const c_choice = PackageList.filter((pack) =>
    c_cardchoice.includes(pack.id)
  );

  const d_choice = DomesticPackageList.filter((item) =>
    d_cardchoice.includes(item.id)
  );

  return (
    <div className="Mainpack-wrap">
        <div className="Mainpack-Main">
            <div className="Mainpack-header">
                <h1>많이 찾는 추천 여행</h1>
                <div>지금 가장 많은 사람들이 선택하고 있는 인기 여행지를 만나보세요</div>
            </div>
            <div className="Mainpack-list">
                {/* 해외 */}
            {c_choice.map((pack) => (
                <div className="Mainpack-card" key={pack.id}>
                <img src={pack.image} className="Mainpack-img" alt={pack.title} />

                <div className="Mainpack-txt">
                    <div className="Mainpack-title">{pack.title}</div>
                    <div className="Mainpack-price">{pack.price}</div>
                </div>

                <button
                    className="Mainpack-button"
                    onClick={() => (window.location.href = pack.link)}
                >
                    {pack.buttonText}
                </button>
                </div>
            ))}
                {/* 국내 */}
            {d_choice.map((item) => (
                <div className="Mainpack-card" key={item.id}>
                <img src={item.image} className="Mainpack-img" alt={item.title} />

                <div className="Mainpack-txt">
                    <div className="Mainpack-title">{item.title}</div>
                    <div className="Mainpack-price">{item.price}</div>
                </div>

                <button
                    className="Mainpack-button"
                    onClick={() => (window.location.href = item.link)}
                >
                    {item.buttonText}
                </button>
            </div>
            ))}
            </div>
        </div>

        <AdSlider/>

    </div>
  );
};

export default PackagesMain;
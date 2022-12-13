import React from "react";
import data from "../JSON/emojis.json";

export default function EmojiDisplay() {
  const [emojiData, setEmojiData] = React.useState(data);
  const [searchData, setSearchData] = React.useState();

  const DisplayEmojis = () => {
    if(searchData === undefined){
      return emojiData.map((d, k) => {
        return <EmojiContainer ky={k} tit={d.title} sym={d.symbol} />;
      });
    }
    return searchData.map((d, k) => {
      return <EmojiContainer ky={k} tit={d.title} sym={d.symbol} />;
    });
      
  };

  const onSearch = (keyword) => {
    setSearchData(
      emojiData
        .filter((kw) => kw.keywords.includes(keyword))
        .map((den) => {
          return den;
        })
    );
  };

  const EmojiContainer = (props) => {
    return (
      <div
        key={props.ky}
        className="flex flex-col rounded-xl m-2 border w-64 h-32 text-center items-center justify-center"
      >
        <h2 className="font-bold text-white">{props.tit}</h2>
        <div className="w-32 h-[2px] bg-white m-3"></div>
        <h1 className="text-4xl">{props.sym}</h1>
      </div>
    );
  };

  return (
    <div className="flex flex-wrap items-center flex-col">
      <input
      type="text"
      placeholder="Search"
      className="w-96 h-12 rounded indent-4 mt-4"
      onChange={(e) => {
        onSearch(e.target.value);
      }}
      />
      <div className="flex flex-wrap items-center">
      <DisplayEmojis />
    </div>
    </div>
      
  );
}

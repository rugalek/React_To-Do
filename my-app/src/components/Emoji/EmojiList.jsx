import React from "react";
import { EmojiItem } from "./EmojiItem";
import styles from "./Emoji.module.css";

export class EmojiList extends React.Component {
  render() {
    const { dataBase } = this.props;

    return (
      <ul className={styles.emojiList}>
        {dataBase.map((item, index) => {
          const { symbol, title } = item;

          return <EmojiItem key={index} symbol={symbol} title={title} />;
        })}
      </ul>
    );
  }
}

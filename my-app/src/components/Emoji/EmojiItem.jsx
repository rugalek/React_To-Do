import React from "react";
import styles from "./Emoji.module.css";

export class EmojiItem extends React.Component {
  render() {
    const { title, symbol } = this.props;

    return (
      <li className={styles.emojiItem}>
        {symbol} {title}
      </li>
    );
  }
}

---
title: '[Rust] The Rust Programming Language 日本語版 をやってみた感想'
excerpt: 'The Rust Programming Language 日本語版 をやってみたので感想をまとめる'
coverImage: 
  url: 'https://i.imgur.com/4xPTo1B'
  aspectRatio: '3/2'
date: '2022-06-11T21:00:00+09:00'
ogImage:
  url: 'https://i.imgur.com/4xPTo1B'
  aspectRatio: '3/2'
tags: ['Rust']
---
  
## 概要

 [The Rust Programming Language 日本語版](https://doc.rust-jp.rs/book-ja/title-page.html#the-rust-programming-language-%E6%97%A5%E6%9C%AC%E8%AA%9E%E7%89%88) をやってみたので各章の感想をまとめる。

## 各章の感想 や メモ

### 3. 一般的なプログラミングの概念

- `let`
	- 変数。 `mut` をつけない限り不変
	- 由来的には [JavaScriptの「let」は何の略？ - NKweb](https://www.nkweb.work/2020/02/06/95/) と一緒な気がする
- `const`
	- 定数。`mut` できない。`constants`

### 7. 肥大化していくプロジェクトをパッケージ、クレート、モジュールを利用して管理する

### 12. 入出力プロジェクト: コマンドラインプログラムを構築する

簡単なCLIのコードを書く -> リファクタリングしてみる -> TDD に挑戦してみる と非常に実践的な内容で理解が進んだ。ここまでの総復習をしながら次の13につなげる内容ですごく良い

### 13. 関数型言語の機能：イテレータとクロージャ

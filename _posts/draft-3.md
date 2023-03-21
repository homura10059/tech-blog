---
title: 'DDDのディレクトリ構成に関して最近考えていること(2023)'
excerpt: 'ある程度大きなロジックを作る時、DDD(っぽい)ディレクトリ構成にすることが多いのだが、これまでよくやっていたパターンは DDD観点からみるとよくない気がしてきたので見直す。試しているだけの雑多なメモかつポエム的なものなので、結論はない。'
coverImage: 
  url: 'https://i.imgur.com/FLnAJxe'
date: '2022-10-15T21:00:00+09:00'
ogImage:
  url: 'https://i.imgur.com/FLnAJxe'
tags: ['ポエム']
---

## 概要

[DDDのディレクトリ構成に関して最近考えていること](/posts/2022-10-15-1) でも考えていたが、最近変わってきたのでまとめる

## 前回まで考えてたこと

```text
domain
|---- hoge
|      |---- model
|      |---- service
|      `---- repository
`---- fuga
       |---- model
       |---- service
       `---- repository

```

プログラム的な役割で最初に階層を切るのをやめて、プログラム的な役割は末節の方に置いた方が収まりが良い気がしてきた。
Rust の `mod.rs` や TypeScript の `index.ts` 的なものをディレクトリごとに作れば、外部公開用のI/Fだけそこに定義するなどもできるので、依存関係の整理としても良い気がする

## こうすればよいのでは？

```text
domain
|---- hoge
|      |---- model
|      |---- service
|      `---- repository
`---- fuga
       |---- model
       |---- service
       `---- repository
```


---
title: '読書メモ：Domain Modeling Made Functional (Part 2, Chapter 4~7)'
excerpt: 'Domain Modeling Made Functional を読んでいるので読書メモ その2'
coverImage: 
  url: 'https://i.imgur.com/sUGwLjX'
  aspectRatio: '3/2'
date: '2023-04-30T21:00:00+09:00'
ogImage:
  url: 'https://i.imgur.com/sUGwLjX'
  aspectRatio: '3/2'
tags: ['読書メモ', 'Rust']
series: '読書メモ：Domain Modeling Made Functional'
---


## 概要

[https://www.amazon.co.jp/dp/B07B44BPFB](https://www.amazon.co.jp/dp/B07B44BPFB)
↑を読んだメモ

サンプルコードをRustに置き換えて遊んでたリポジトリは以下[https://github.com/homura10059/DomainModelingMadeFunctional_in_Rust](https://github.com/homura10059/DomainModelingMadeFunctional_in_Rust)


Domain Modeling Made Functional の読書メモシリーズ は [こちら](../series/bd9f5f797461f1f04bd00051b6f878d6)

## Part3 Implementing the Model

### Chapter8 Understanding Functions

#### Functions, Functions, Everywhere
OOP(object-oriented programing)とFP(functional programing)の違いを端的にいうと
>Functional programming is programming as if functions really mattered.

比較
|                    | OOP                     | FP                                      |
| ------------------ | ----------------------- | --------------------------------------- |
| approach           | use interfaces and DI   | parameterize with functions             |
| DRY原則            | 継承とDecoratorパターン | 再利用可能なFunctionを関数合成          |
| collectionへの操作 | loop                    | action for each element of a collection |
| ポリモーフィズム   | storategy pattern       | parameterize behavior                   |

#### Functions Are Things

* 高階関数(Higher-Order Functions)
	* functionをinput/outputにするfunction
	* HOFsと書かれたりもする

#### Total Functions

#### Composition

#### Wrapping Up

### Chapter9 Implementation: Composing a Pipeline

### Chapter10 Implementation: Composing a Pipeline

### Chapter11 Serialization

### Chapter12 Persistence

### Chapter13 Evolving Design and Keeping it Clean

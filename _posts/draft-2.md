---
title: '[Rust] AWS Lambda へのCD環境を整える'
excerpt: 'Rust で作ったものをAWS Lambda で動かしてみようと思う。aws-lambda-rust-runtime を使えばできそうだったのでまず CD 環境を整える'
coverImage: 'https://i.imgur.com/4xPTo1B'
date: '2022-06-26T21:00:00+09:00'
ogImage:
  url: 'https://i.imgur.com/4xPTo1B'
tags: ['Rust', 'AWS', 'lambda']
---
  
## 概要
Rust で作ったものをAWS Lambda で動かしてみようと思う。aws-lambda-rust-runtime を使えばできそうだったのでまず CD 環境を整える。
Rust自体を書けるようになることが先じゃないかという考え方もある気がするが、CI/CD 整えて動かせる環境を常に作っておくことが最優先だと思っている。動く/動かないのフィードバックを素早く受け取れる環境を作っておくことで後々の開発スピードに効いてくるので。

## やったことメモ

[https://github.com/awslabs/aws-lambda-rust-runtime](https://github.com/awslabs/aws-lambda-rust-runtime)
のREADMEに沿ってやっていく

### サンプルコードの生成

まずは cargo-lambda を install する
```bash
$ brew tap cargo-lambda/cargo-lambda
$ brew install cargo-lambda
$ cargo install cargo-lambda
```

インストールが終わったらサンプルプロジェクトを作成する

```bash
$ cargo lambda new aws-lambda-sample
? Is this function an HTTP function? Yes
```

とりあえずHTTP functionで作っておく
コード見る限り、作っただけでとりあえず動くサンプルができてるのでビルドしてみる

```bash 
$ cargo lambda build --release
$ cargo lambda build --release --arm64
```

どっちもビルドは通る

### AWS-lambda へのデプロイ

1. cargo-lambda を使ってデプロイ
2. AWS CLI を使ってデプロイ
3. AWS Serverless Application Model (SAM) を使ってデプロイ
4. Serverless Framework を使ってデプロイ
5. Docker を使ってデプロイ

方法としては上記の5種類があるっぽい。

CI/CDとしては [GitHub Actions で monorepo の CI 環境を整える](/posts/2022-06-26-1) で使った GitHub Actions を使っていきたいので、GitHub Actions から使えそうな AWS Serverless Application Model (SAM)  でやってみる。




---
title: '読書メモ：Domain Modeling Made Functional (Part 1, Chapter 1~3)'
excerpt: 'Domain Modeling Made Functional を読んでいるので読書メモ'
coverImage: 
  url: 'https://i.imgur.com/sUGwLjX'
  aspectRatio: '3/2'
date: '2023-04-02T20:30:00+09:00'
ogImage:
  url: 'https://i.imgur.com/sUGwLjX'
  aspectRatio: '3/2'
tags: ['読書メモ']
series: '読書メモ：Domain Modeling Made Functional'
---


## 概要

https://pragprog.com/titles/swdddf/domain-modeling-made-functional/  
を読んだメモ

サンプルコードをRustに置き換えて遊んでたリポジトリは以下
https://github.com/homura10059/DomainModelingMadeFunctional_in_Rust

Part1 は [こちら](posts/2023-04-02-1)

## Part2 Modeling the Domain

ここからはサンプルコードが出てくるが、F#なのでRustに書き直しながら理解を深める

### Chapter4 Understanding Types

#### Type Signature 

```rust
fn add1(x: isize, y: isize) -> isize {  
    x + y  
}  
  
fn add(x: isize, y: isize) -> impl Fn(isize, isize) -> isize {  
    move |x, y| x + y  
}  
  
fn square_plus_one(x: isize) -> isize {  
    let square = move |x| x * x;  
    square(x) + 1  
}
```

#### Functions with Generic Types

```rust
fn are_equal<T: PartialEq>(x: T, y: T) -> bool {  
    x == y  
}
```

####  "Values" vs. "Objects" vs. "Variables"

- 関数型言語ではよく "values" を使うが、OOPではよく"objects" を使う
- Values は immutable (なのでvariablesとは呼ばない) なただのデータ
- Objects はデータと振る舞いをカプセル化したものなのでstateを持ったデータ
- 関数型言語では "Values" を基本的に使う( "Objects" や "Variables" よりも)

#### Composition of Types

```rust
struct AppleFruit {}  
struct BananaFruit {}  
struct CherriesFruit {}  
  
// AND type  
struct FruitSnack {  
    apple: AppleFruit,  
    banana: BananaFruit,  
    cherries: CherriesFruit,  
}  
  
// OR type  
enum FruitSnackEnum {  
    Apple(AppleFruit),  
    Banana(BananaFruit),  
    Cherries(CherriesFruit),  
}
```


####  "Product Types" vs. "Sum Types"

- AND type  は "Product Types" とも呼ばれる
- OR type は "Sum Types" , "Tagged Unions", "Discriminated union", "Chois types" とも呼ばれる

#### Simple Types

```rust
type Kilometers = i32;
```

rust だと型エイリアスのこと? -> chaper5読んでわかった違う。
引数1つしか取らない tuple type の struct のこと

```rust
struct Kilometers(i32);  
```

#### Building a Domain Model by Composing Types

```rust
type CheckNumber = i32;  
type CardNumber = String;  
  
enum CardType {  
    Visa,  
    MasterCard,  
}  
  
struct CreditCardInfo {  
    card_type: CardType,  
    card_number: CardNumber,  
}  
  
enum PaymentMethod {  
    Cash,  
    Check(CheckNumber),  
    Card(CreditCardInfo),  
}  
  
type PaymentAmount = i64;  
enum Currency {  
    EUR,  
    USD,  
}  
  
struct Payment {  
    amount: PaymentAmount,  
    currency: Currency,  
    method: PaymentMethod,  
}  
  
// PayInvoice = UnpaidInvoice -> Payment -> PaidInvoice  
// ConvertPaymentCurrency = Payment -> Currency -> Payment
```

enum に値渡すのどう使うんだと思ってたけど、こういう使い方すれば良さそう


#### Modeling Optional Values

普通にOption使えばいいぐらいの話だった。

#### Modeling Errors

これもResult使えば良さそう。

#### Modeling No Value at All

これも `()` unit型 を使えば良さそう

#### Modeling Lists and Collections

これも(ry

#### Organizing Types in File and Projects

domainごとに以下の2ファイル作る構成にするらしい(あんまりメリットとかはピンときてない)
```text
Foo.Types.rs
Foo.Functions.rs
```

### Chapter5 Domain Modeling with Types

#### Seeing Patterns in Domain Model

- Simple values
	- OrderId とか ProductCode とか int や String だけど名前のついているもの
- Combinations of values with AND
	- address , order など
- Choices with OR
	- quote, unitQuantity など
- Workflow
	- input -> output に変換するビジネスプロセス

#### Modeling Simple Values

```rust
struct CustomerId(i64);  
struct OrderId(i64);  
  
fn process_customer_id(id: &CustomerId) -> String {  
    let inner_val = id.0; // 内部的な値を取り出して使うこともできる  
    format!("id:{}", inner_val)  
}  
  
fn sample() {  
    let id = OrderId(42);  
    process_customer_id(&id); // ここでエラーになる  
}
```

実態が同じ `i64` でも取り違えた時に型エラーにできるように simple values を作っておいた方がいい
制約をかけてsimple valuesを生成する方法については次のchapterで

リアルタイム性が必要で性能面で気になるなら型エイリアスを使う方法もある（型の安全性は若干失われるが）

#### Modeling Complex Data

徐々に作っていくので、最初は Unknown Type を使って徐々にモデリングしていく
```rust
use std::error::Error;  
  
type Undefined = dyn Error;  
  
type CustomerInfo = Undefined;  
type SippingAddress = Undefined;  
type BillingAddress = Undefined;  
type OrderLine = Undefined;  
type BillingAmount = Undefined;  
  
struct Order {  
    customer_info: CustomerInfo,  
    sipping_address: SippingAddress,  
    billing_address: BillingAddress,  
    order_lines: Vec<OrderLine>,  
    billing_amount: BillingAmount,  
}
```

Choice Type はこんな感じ
```rust
enum ProductCode {  
    WidgetCode(i32),  
    GizmoCode(i32)  
}  
  
enum OrderQuantity {  
    UnitQuantity(i32),  
    Kilogram(i32)  
}
```

#### Modeling Workflows with Functions

Function で 1step づつ方変換しながら workflow を実装していく的なことが書いてある。ここはまあそうだよねぐらい。

#### A Question of Identity: Value Objects 

DDDのValue Objects の説明。Rust的には単に `PartialEq` をderiveすると全要素で比較されるので実現できる。

```rust
#[derive(Debug, PartialEq)]  
struct WidgetCode(String);  
  
#[derive(Debug, PartialEq)]  
struct PersonalName {  
    first_name: String,  
    last_name: String,  
}  
  
#[cfg(test)]  
mod test {  
    use super::*;  
  
    #[test]  
    fn test_widget_code_1() {  
        let widget_code1 = WidgetCode("W1234".to_string());  
        let widget_code2 = WidgetCode("W1234".to_string());  
        assert_eq!(widget_code1, widget_code2)  
    }  
  
    #[test]  
    fn test_widget_code_2() {  
        let widget_code1 = WidgetCode("W1234".to_string());  
        let widget_code2 = WidgetCode("W12345".to_string());  
        assert_ne!(widget_code1, widget_code2)  
    }  
  
    #[test]  
    fn test_name_1() {  
        let name1 = PersonalName {  
            first_name: "aaa".to_string(),  
            last_name: "bbb".to_string(),  
        };  
        let name2 = PersonalName {  
            first_name: "aaa".to_string(),  
            last_name: "bbb".to_string(),  
        };  
        assert_eq!(name1, name2)  
    }  
  
    #[test]  
    fn test_name_2() {  
        let name1 = PersonalName {  
            first_name: "aaa".to_string(),  
            last_name: "bbb".to_string(),  
        };  
        let name2 = PersonalName {  
            first_name: "ccc".to_string(),  
            last_name: "ddd".to_string(),  
        };  
        assert_ne!(name1, name2)  
    }  
}
```

#### A Question of Identity: Entities

Entities(一意識別できるIDを持ったもの)をどう実装するか。Rustでは `PartialEq` を自前で実装することで実現できそう。

```rust
#[derive(Debug, Clone)]  
struct ContactId(i64);  
  
#[derive(Debug, Clone)]  
struct Contact {  
    contact_id: ContactId,  
    phone_number: String,  
    email_address: String,  
}  
  
impl PartialEq for Contact {  
    fn eq(&self, other: &Self) -> bool {  
        self.contact_id.0 == other.contact_id.0  
    }  
}  
  
#[cfg(test)]  
mod test {  
    use super::*;  
  
    #[test]  
    fn test_equal() {  
        let contact_a = Contact {  
            contact_id: ContactId(1),  
            phone_number: "123-4567".to_string(),  
            email_address: "aaaaa@example.com".to_string(),  
        };  
        let contact_b = Contact {  
            phone_number: "890-1234".to_string(),  
            email_address: "bbbb@example.com".to_string(),  
            ..contact_a.clone()  
        };  
        assert_eq!(contact_a, contact_b)  
    }  
  
    #[test]  
    fn test_not_equal() {  
        let contact_a = Contact {  
            contact_id: ContactId(1),  
            phone_number: "123-4567".to_string(),  
            email_address: "aaaaa@example.com".to_string(),  
        };  
        let contact_b = Contact {  
            contact_id: ContactId(2),  
            ..contact_a.clone()  
        };  
        assert_ne!(contact_a, contact_b)  
    }  
}
```

基本的にimmutableなデータを使ってworkflowを構築していくが、Entityは状態が変わる可能性がある。その場合は clone して一部書き換えたものを使うというユースケースが頻繁に発生する。RustだとEntityにはCloneをderiveしておいた方が良さそう。

#### Aggregate

Order と OrderLine のようにどちらも Entity だが依存関係がある場合、依存関係のトップレベルのEntityをAggregateと呼ぶ。

```rust
#[derive(Debug, PartialEq, Clone)]  
struct Quantity(i64);  
  
#[derive(Debug, PartialEq, Clone)]  
struct Price(i64);  
  
#[derive(Debug, PartialEq, Clone)]  
struct OrderLineId(i64);  
  
#[derive(Debug, PartialEq, Clone)]  
struct CustomerId(i64);  
  
#[derive(Debug, PartialEq, Clone)]  
struct ProductCode(String);  
  
#[derive(Debug, PartialEq, Clone)]  
struct Product {  
    product_code: ProductCode,  
}  
  
#[derive(Debug, PartialEq, Clone)]  
struct OrderLine {  
    order_line_id: OrderLineId,  
    product: Product,  
    quantity: Quantity,  
    price: Price,  
}  
  
#[derive(Debug, PartialEq, Clone)]  
struct Order {  
    order_lines: Vec<OrderLine>,  
    customer_id: CustomerId,  
    total_price: Price,  
}  
  
fn change_order_line_price(order: &Order, order_line_id: &OrderLineId, new_price: &Price) -> Order {  
    let order_line_pos = order  
        .order_lines  
        .iter()  
        .position(|line| line.order_line_id == *order_line_id)  
        .unwrap(); // ほんとはエラー処理必要  
  
    let order_line = order.order_lines.get(order_line_pos).unwrap().clone();  
  
    let new_order_line = OrderLine {  
        price: new_price.clone(),  
        ..order_line  
    };  
  
    let mut new_order_lines = order.order_lines.clone();  
  
    let _old_order_line = std::mem::replace(&mut new_order_lines[order_line_pos], new_order_line);  
  
    let new_total_price = new_order_lines  
        .iter()  
        .map(|line| line.price.0 * line.quantity.0)  
        .sum::<i64>();  
  
    Order {  
        order_lines: new_order_lines,  
        total_price: Price(new_total_price),  
        ..order.clone()  
    }  
}  
  
#[cfg(test)]  
mod test {  
    use super::*;  
  
    #[test]  
    fn test_change_order_line_price() {  
        let order_line = OrderLine {  
            order_line_id: OrderLineId(1),  
            product: Product {  
                product_code: ProductCode("W-123".to_owned()),  
            },  
            quantity: Quantity(1),  
            price: Price(1_000),  
        };  
        let order = Order {  
            order_lines: vec![  
                OrderLine {  
                    order_line_id: OrderLineId(1),  
                    ..order_line.clone()  
                },  
                OrderLine {  
                    order_line_id: OrderLineId(2),  
                    ..order_line.clone()  
                },  
            ],  
            customer_id: CustomerId(1),  
            total_price: Price(2_000),  
        };  
  
        let expected = Order {  
            order_lines: vec![  
                OrderLine {  
                    order_line_id: OrderLineId(1),  
                    price: Price(2_000),  
                    ..order_line.clone()  
                },  
                OrderLine {  
                    order_line_id: OrderLineId(2),  
                    ..order_line.clone()  
                },  
            ],  
            customer_id: CustomerId(1),  
            total_price: Price(3_000),  
        };  
  
        let actual = change_order_line_price(&order, &OrderLineId(1), &Price(2_000));  
  
        assert_eq!(actual, expected)  
    }  
}
```


### Chapter6 Integrity and Consistency in the Domain

- integrity (or validity)：データが正しくビジネスルールに沿っているかどうか
- consistency：ドメインモデルの異なるパーツの関係性が事実と一致しているか

この二つ区別せずに validation って言ってしまってた気がする

#### The Integrity of Simple Values


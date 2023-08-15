# Overview

TypeScriptのトランスパイルのサンプル。

# Setup

```sh
npm ci
```

# Node.js（ESM）

```sh
git checkout node-esm
```

ESMのモジュール読み込みをオプション指定したブランチ。
以下のファイル群をJavaScriptに変換してnodeで実行する。

```sh
./src/
├── foo.mts
├── foo.ts
└── index.ts
```

```sh
node dist/index.js
```

ソースを変更した時はビルドをやり直す。

```sh
npm run build
```

# Node（CommonJS）

```sh
git checkout node-cjs
```

CommonJSのモジュール読み込みをオプション指定したブランチ。
以下のファイル群をJavaScriptに変換してnodeで実行する。

```sh
./src/
├── foo.cts
├── foo.ts
└── index.ts
```

```sh
node dist/index.js
```

ソースを変更した時はビルドをやり直す。

```sh
npm run build
```

# Browser

```sh
git checkout node-cjs
```

ESMのモジュール読み込みをオプション指定したブランチ。
以下のファイル群をJavaScriptに変換してブラウザで実行する。

```sh
./src/
├── foo.ts
└── index.ts
```

```sh
npm run browse
```

ソースを変更した時はCtrl+Cで終了して再度立ち上げる。

```sh
npm run browse
```

# Minor Spot

## How to Dev

### ビルド方法
- `yarn install` (or `npm install`)
- `yarn run dev [--watch]` (or `npm run dev [--watch]`)

### サーバ起動
- `yarn run start` (or `npm run start`)

### 稼働確認
- ブラウザで http://localhost:3000 にアクセス


## How to Design

### 使えるコンポーネントを知りたい
- https://material-ui.com/ の Component Demo のページを眺めると幸せになれる

### 使えるアイコンを知りたい
- `<Icon>star</Icon>` のように指定する
- star のところに指定できるものについては https://material.io/tools/icons/ を参照

### スタイルを適用したい
- src/minorSpotApp/styles/index.js を追記・修正していく
- オブジェクト記法 (e.g. `key: { ... }`) として記述した場合は、コンポーネント側はスタイル (e.g. `<Component style={styles.key} />`) として適用する
- CSS 記法 (e.g. `key: css({ ... })`) として記述した場合は、コンポーネント側はクラス (e.g. `<Component className={styles.key} />`) として適用する
- 詳細は https://emotion.sh/ を参照

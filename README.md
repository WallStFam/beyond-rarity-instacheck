# Beyond Rarity Instacheck widget

### You can try a live demo [here](https://codepen.io/nicopanfili/pen/GRxmPeW)

## Installation
Using **NPM**:

`
npm i @beyondrarity/instacheck
`

Using **YARN**:

`
yarn add @beyondrarity/instacheck
`

## Usage
Import the component and use it:
```jsx
import Instacheck from '@beyondrarity/instacheck'

const Example = () => (
    <div>
        <h1>Beyond Rarity Checker</h1>
        <BRChecker 
            collectionId="wallstmoms" 
            startTokenId={1}
            endTokenId={3000}
            theme="light"
        />
    </div>
)
```

### Component Required Props:
- `collectionId` - The collection id (slug)
- `startTokenId` - The first token id
- `endTokenId` - The last token id

### Component Optional Props:
- `theme` - should be `'light'` or `'dark'`. Default is `'light'`.

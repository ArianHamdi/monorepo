# `QRScanner`

The component which provides the QR scanner functionality.

## Initialization

```typescript
import {QRScanner} from '@twa.js/sdk';
import {Bridge} from '@twa.js/bridge';

const scanner = new QRScanner(Bridge.init(), '6.3');
```

## Opening and closing

To open the QR scanner, you should use the `open()` method which
accepts an optional text displayed to a user. As the result, method
returns a promise which will be solved in case, some QR was scanned.
It also could return `null` in case, scanner was closed.

```typescript
scanner.open().then(console.log); // some-data=22l&app=93...
console.log(scanner.isOpened); // true
```

To close the scanner, use `close()` method:

```typescript
scanner.close();
console.log(scanner.isOpened); // false
```

## Events

Events available for the [listening](../about#events):

- `isOpenedChanged: (isOpened: boolean) => void`

## Methods support

Methods available for the [support check](../about#methods-support):

- `close`
- `open`
Needs Node v19

### Sanity Check
(all in [`htmlMain.ts`](./packages/backend/src/html/htmlMain.ts))

1) `htmlMain` passes `sceneNode`([]) to `htmlWidgetGenerator`
2) `htmlWidgetGenerator` loops through `sceneNode`, passing
   the iterated node to one of 7 functions which return
   a string. 3 of which may recursively call
   `htmlWidgetGenerator`:
    + htmlGroup
    + htmlFrame
    + htmlSection

    tags are generated by:
    + htmlGroup
    + htmlText
    + htmlAsset
    + htmlSection
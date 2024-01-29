# griddy-react
Griddy is a React 3x3 grid. No features, just a grid.
## Docs
Griddy is super easy to use!
### `<Grid>`
Create a Grid parent element to put GridItems inside:
```jsx
<Grid griddyTheme={theme}>
</Grid>
```
Valid themes are `light` and `dark`.
### `<GridItem>`
Create a Grid parent element:
```jsx
<Grid griddyPosition={position}>
</Grid>
```
Positions are `row-column` format. Column values can be left, right or center. Rows can be top, bottom, or center.
Put anything inside of these!

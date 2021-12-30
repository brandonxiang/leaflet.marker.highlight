# leaflet.marker.highlight

Highlight effects for L.marker.

## Demo

[DEMO](https://brandonxiang.github.io/leaflet.marker.highlight/)

## Installation

```javascript
npm install leaflet.marker.highlight --save
```

## Usage

### Temporarily Highlight

Highlight effects will occur in the situation that you put your mouse over the marker.

You can set it when initializing a marker. 

```javascript
var marker1 = L.marker([51.5, -0.09], {highlight: 'temporary'}).addTo(map);
```

Or you can use a method to enable the highlight effects.

```javascript
marker1.enableTemporaryHighlight();
```

```javascript
marker1.disableTemporaryHighlight();
```

### Permanently Highlight

Highlight effects are always on.

```javascript
var marker1 = L.marker([51.5, -0.09], {highlight: 'permanent'}).addTo(map);
```

or

```javascript
marker1.enablePermanentHighlight();
```

Cancel the marker highlight effects by 

```javascript
marker1.disablePermanentHighlight();
```

## License

[MIT](LICENSE)


## Chinese Version

[README](README_CN.md)

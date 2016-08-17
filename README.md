# leaflet.marker.hightlight
Highlight effects for L.marker.

## Demo

[DEMO](https://brandonxiang.github.io/leaflet.marker.highlight/examples/)


## Installation

```
npm install leaflet.marker.highlight --save
```

## Usage

### Shortenly Highlight

mouseover for highlight effects

### Parmanently Highlight

```
var marker1 = L.marker([51.5, -0.09], {highlight: true}).addTo(map);
```

or

```
marker1.enableHighlight();
```

Cancel the marker highlight effects by 

```
marker1.disableHighlight();
```

## License

[MIT](LICENSE)
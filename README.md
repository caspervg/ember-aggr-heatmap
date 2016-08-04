# aggr-heatmap

## Description
Ember (2.5+) addon/component that makes it easy to display heatmaps from the Aggr JSON API.

Implemented by Casper Van Gheluwe (UGent) during the summer of 2016, as part of an internship at TenForce.

## Note
The library that this addon depends on, [ember-leaflet-heatmap](https://github.com/willviles/ember-leaflet-heatmap), currently does not support any Ember versions higher than 2.5. There is an [open issue](https://github.com/willviles/ember-leaflet-heatmap/issues/1) about this.

## Usage
```handlebars
{{#mu-heatmap dataset=your_dataset_here latitude=lat longitude=lon zoom=zoom
                                  opacity=opacity radius=radius scaleRadius=scaleRadius useLocalExtrema=localExtrema
                                  blur=blur}}
    {{tile-layer url="http://a.tile.openstreetmap.org/{z}/{x}/{y}.png"}}
{{/mu-heatmap}}
```
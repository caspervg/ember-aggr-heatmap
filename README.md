# aggr-heatmap

## Description
Ember (2.5+) addon/component that makes it easy to display heatmaps from the Aggr JSON API.

Implemented by Casper Van Gheluwe (UGent) during the summer of 2016, as part of an internship at TenForce.

## Usage
```handlebars
{{#mu-heatmap dataset=your_dataset_here latitude=lat longitude=lon zoom=zoom
                                  opacity=opacity radius=radius scaleRadius=scaleRadius useLocalExtrema=localExtrema
                                  blur=blur}}
    {{tile-layer url="http://a.tile.openstreetmap.org/{z}/{x}/{y}.png"}}
{{/mu-heatmap}}
```
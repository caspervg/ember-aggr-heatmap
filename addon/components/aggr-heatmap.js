import Ember from 'ember';
import layout from '../templates/components/aggr-heatmap';

export default Ember.Component.extend({
  layout,

  dataset: null,
  latitude: 0.0,
  longitude: 0.0,
  bounds: undefined,
  center: undefined,
  zoom: 7,

  backgroundColor: null,
  blur: 0.85,
  gradient: null,
  maxOpacity: 1,
  opacity: 0.6,
  minOpacity: 0.0,
  radius: 0.33,
  scaleRadius: true,
  useLocalExtrema: false,

  waitingUpdates: 0,

  data: {
    data: []
  },

  dataUpdater: Ember.observer('dataset', function () {
    var self = this;
    this
      .get('dataset')
      .get('measurements')
      .then(centroids => {
        let data = Ember.A(centroids.map(
          centroid => {
            return Ember.Object.create({
              lat: centroid.get('latitude'),
              lng: centroid.get('longitude'),
              value: centroid.get('weight')
            });
          }
        ));

        var min = Number.MAX_SAFE_INTEGER;
        var max = Number.MIN_SAFE_INTEGER;
        for (var i = 0; i < data.length; i++) {
          if (data[i].value < min) {
            min = data[i].value;
          }
          if (data[i].value > max) {
            max = data[i].value;
          }
        }

        self.set('data', Ember.Object.create({min: min, max: max, data: data}));
      });
  }).on('init'),

  heatmapRefresher: Ember.observer('latitude', 'longitude', 'zoom', 'backgroundColor', 'blur', 'gradient', 'maxOpacity',
    'opacity', 'minOpacity', 'radius', 'scaleRadius', 'useLocalExtrema', function () {
      var self = this;
      self.set('waitingUpdates', self.get('waitingUpdates')+1);
      Ember.run.debounce({'self': this}, function () {
        self.set('waitingUpdates', self.get('waitingUpdates')-1);
      }, 100);
    }).on('init')
});

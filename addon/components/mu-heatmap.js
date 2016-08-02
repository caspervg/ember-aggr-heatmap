import Ember from 'ember';
import layout from '../templates/components/mu-heatmap';

export default Ember.Component.extend({
  layout,

  dataset: null,
  latitude: 0.0,
  longitude: 0.0,
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

        self.set('data', Ember.Object.create({data: data}));
      });
  }).on('init'),

  heatmapRefresher: Ember.observer('latitude', 'longitude', 'zoom', 'backgroundColor', 'blur', 'gradient', 'maxOpacity',
    'minOpacity', 'radius', 'scaleRadius', 'useLocalExtrema', function () {
      var self = this;
      self.set('waitingUpdates', self.get('waitingUpdates')+1);
      Ember.run.next(function () {
        self.set('waitingUpdates', self.get('waitingUpdates')-1);
      });
    }).on('init')
});

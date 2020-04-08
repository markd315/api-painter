AFRAME.registerComponent('boxspawner', {
    schema: {
      color: {type: 'color', default: '#ef2d5e'},
      w: {default: 3},
      h: {default: 3},
      d: {default: 3},
      enabled: { default: true }
    },
    init: function () {
      var data = this.data;
      this.color = new THREE.Color(data.color);
      //^ keeping for example
      this.obj = this.el.object3D;

      this.spawnedBoxes = [];

      var geometry = new THREE.BoxBufferGeometry(this.w, this.h, this.d); //w, h, d
      var material = new THREE.MeshStandardMaterial({ color: this.color });
      this.model = new THREE.Mesh(geometry, material);
      this.spawnedBoxes.push(this.model);
    }
  });
  
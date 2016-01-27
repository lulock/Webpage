  var scene = new THREE.Scene();
var clock = new THREE.Clock();

    // SETUP RENDERER

  var renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  renderer.setClearColor( 0x0 );                // white background colour

//enabled to receive shadows
renderer.shadowMapEnabled = true;
  document.body.appendChild( renderer.domElement );  // add to document canvas 

   // SETUP CAMERA

  var aspect = window.innerWidth/window.innerHeight;
  camera = new THREE.PerspectiveCamera( 50, aspect, 0.1, 10000);   // view angle, aspect ratio, near, far
  camera.position.set(60,40,100);
  camera.lookAt(scene.position);	
  scene.add(camera);

    // DEFINE UNIT CUBE -- to be reused several times

  var unitCubeGeometry = new THREE.BoxGeometry( 1,1,1 );

    // LIGHTS

  lightColor = new THREE.Color(1,1,1);
  ambientColor = new THREE.Color(1,1,1);
  lightPosition = new THREE.Vector3(camera.position.x,camera.position.y, camera.position.z);


/////////////////////////// THREE.JS ILLUMINATION ////////////////////////////

// LIGHT SOURCES
  //point lights do not cast shadows
  var light = new THREE.PointLight(lightColor.getHex());
  light.position.set(0,100,0);
// scene.add(light);

var spot = new THREE.SpotLight(0xffffff);
spot.position.set(0, 100, 0);
spot.castShadow = true;
scene.add(spot);

var spotLight = new THREE.SpotLight(0xffff00);
spotLight.position.set(10, 10, 10);
spotLight.castShadow = true;
scene.add(spotLight);

var spotLightTwo = new THREE.SpotLight(0x00ffff);
spotLightTwo.position.set(-10, 15, -10);
spotLightTwo.castShadow = true;
scene.add(spotLightTwo);

var spotLightThree = new THREE.SpotLight(0xff0000);
spotLightThree.position.set(15, 15, -15);
spotLightThree.castShadow = true;
scene.add(spotLightThree);

var bulbgeometry = new THREE.OctahedronGeometry( 1, 0 );
var bulbmaterial = new THREE.MeshBasicMaterial( { color: 0xffff00, wireframe: true } );
var bulb = new THREE.Mesh( bulbgeometry, bulbmaterial );
bulb.position.set(spotLight.position.x, spotLight.position.y, spotLight.position.z);
scene.add( bulb );

var bulbgeometryTwo = new THREE.OctahedronGeometry( 1, 0 );
var bulbmaterialTwo = new THREE.MeshBasicMaterial( { color: 0x00ffff, wireframe: true } );
var bulbTwo = new THREE.Mesh( bulbgeometryTwo, bulbmaterialTwo );
bulbTwo.position.set(spotLightTwo.position.x, spotLightTwo.position.y, spotLightTwo.position.z);
scene.add( bulbTwo );

var bulbgeometryThree = new THREE.OctahedronGeometry( 1, 0 );
var bulbmaterialThree = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } );
var bulbThree = new THREE.Mesh( bulbgeometryThree, bulbmaterialThree );
bulbThree.position.set(spotLightThree.position.x, spotLightThree.position.y, spotLightThree.position.z);
scene.add( bulbThree );

var blackMaterial  = new THREE.MeshBasicMaterial( { color: 0x000000});
var originBox = new THREE.Mesh( unitCubeGeometry, blackMaterial );
originBox.visible=false;

scene.add( originBox );
spotLight.parent = bulb;
spotLightTwo.parent = bulbTwo;
spotLightThree.parent = bulbThree;
bulb.parent = bulbTwo.parent = bulbThree.parent = originBox;

  var ambientLight = new THREE.AmbientLight(ambientColor.getHex());
  scene.add(ambientLight);

//  removed pan and zoom from .js file
controls = new THREE.OrbitControls( camera, renderer.domElement );
    // ROOM

THREE.ImageUtils.crossOrigin = '';

var floorMaterial = new THREE.MeshLambertMaterial( { map: THREE.ImageUtils.loadTexture( 'images/stonefloor.jpg' ), color: 0x888888, ambient: 0x080808, side: THREE.DoubleSide} );
var floorGeometry = new THREE.PlaneGeometry(70, 70);
var floor = new THREE.Mesh(floorGeometry, floorMaterial);

floor.position.y = -3;
floor.rotation.x = Math.PI / 2;
floor.receiveShadow = true;
scene.add(floor);


var wallMaterial = new THREE.MeshLambertMaterial( { color: 0xffffff, ambient: 0x080808} );
var wallGeometry = new THREE.PlaneGeometry(70, 70);
var wallOne = new THREE.Mesh(wallGeometry, wallMaterial);
wallOne.receiveShadow = true;
wallOne.position.z = -30;
wallOne.position.y = 32;
scene.add(wallOne);

var wallTwo = new THREE.Mesh(wallGeometry, wallMaterial);
wallTwo.receiveShadow = true;
wallTwo.position.y = 32;
wallTwo.position.x = -35;
wallTwo.rotation.y = Math.PI / 2;
scene.add(wallTwo);

var wallThree = new THREE.Mesh(wallGeometry, wallMaterial);
wallThree.receiveShadow = true;
wallThree.position.y = 32;
wallThree.position.x = 35;
wallThree.rotation.y = - Math.PI / 2;
scene.add(wallThree);


var sphereGeometry = new THREE.SphereGeometry (3, 32, 32);
//shininess: smaller the number, farther the point light, bigger the gleam.
var sphereMaterial = new THREE.MeshPhongMaterial( { ambient: 0x080808, color: 0xffffff, specular: 0x222222, shininess: 30, shading: THREE.SmoothShading, blending: THREE.AdditiveBlending } );
var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphere.castShadow = true;
scene.add(sphere);

var sphere2Geometry = new THREE.SphereGeometry (3, 32, 32);
//shininess: smaller the number, farther the point light, bigger the gleam.
var sphere2Material = new THREE.MeshPhongMaterial( { ambient: 0x080808, color: 0xffffff, specular: 0x222222, shininess: 30, shading: THREE.SmoothShading, blending: THREE.AdditiveBlending } );
var sphere2 = new THREE.Mesh(sphere2Geometry, sphere2Material);
scene.add(sphere2);
sphere2.castShadow = true;
sphere2.position.set(10, 0, 0);

var sphere3Geometry = new THREE.SphereGeometry (3, 32, 32);
//shininess: smaller the number, farther the point light, bigger the gleam.
var sphere3Material = new THREE.MeshPhongMaterial( { ambient: 0x080808, color: 0xffffff, specular: 0x222222, shininess: 30, shading: THREE.SmoothShading, blending: THREE.AdditiveBlending } );
var sphere3 = new THREE.Mesh(sphere3Geometry, sphere3Material);
sphere3.castShadow = true;
scene.add(sphere3);
sphere3.position.set(-10, 0, 0);



//    // SETUP RENDER CALL-BACK

  var render = function () {
      originBox.rotation.y += 0.02;
      sphere3.position.x += Math.sin(clock.getElapsedTime);
      //originBox.position.y;
    requestAnimationFrame( render );
    controls.update();
    renderer.render(scene, camera);
  };
  render();

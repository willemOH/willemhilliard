 
            window.onload = function() {
  // all that code here

			var camera, scene, renderer;
			var mesh;
			init();
			animate();
			function init() {
                
                
                
                
            var canvas = document.createElement('canvas');
            canvas.width = 512;
            canvas.height = 512;
            var context = canvas.getContext('2d');
              
  

    context.font = "Bold 20px Helvetica";
    context.lineWidth = 4;
  context.strokeStyle = 'rgba(255,255,255,.8)';
  context.fillStyle = "rgba(0,0,0,1)";
  context.strokeText("Testing", 4, 22);
  context.fillText("Testing", 4, 22);    
                
                
                
				camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000 );
				camera.position.z = 400;
				scene = new THREE.Scene();
				  var texture = new THREE.Texture(canvas);
                texture.needsUpdate = true;
				var geometry = new THREE.BoxBufferGeometry( 200, 200, 200 );
				var material = new THREE.MeshBasicMaterial( { map: texture } );
				mesh = new THREE.Mesh( geometry, material );
				scene.add( mesh );
				renderer = new THREE.WebGLRenderer( { antialias: true } );
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( window.innerWidth, window.innerHeight );
				document.body.appendChild( renderer.domElement );
				//
				window.addEventListener( 'resize', onWindowResize, false );
			}
			function onWindowResize() {
				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();
				renderer.setSize( window.innerWidth, window.innerHeight );
			}
			function animate() {
				requestAnimationFrame( animate );
				mesh.rotation.x += 0.005;
				mesh.rotation.y += 0.01;
				renderer.render( scene, camera );
			}
                
                };
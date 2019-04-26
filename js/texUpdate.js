	      window.onload = function() {
  // all that code here

var camera, scene, renderer;
			var mesh;

			init();
			animate();
			function init() {
                
                			
            
            var canvas = document.createElement('canvas');
            canvas.width = 500;
            canvas.height = 200;
            
            var context = canvas.getContext('2d');
            canvas.needsUpdate = true;
            
            context.fillStyle ="green";
            context.fillRect(0, 0, canvas.width, canvas.height);
                
            var currency = document.getElementById('currency').value;
                
            var amount = document.getElementById('amount').value;
            
            context.font = "Bold 40px Helvetica";
            context.lineWidth = 4;
            context.strokeStyle = 'rgba(255,255,255,.8)';
            context.fillStyle = "rgba(0,0,0,1)";
            context.strokeText(currency, 200, 100);
            context.fillText(currency, 200, 100); 
            context.strokeText(amount, 20, 50);
            context.fillText(amount, 20, 50); 
            

				camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000 );
				camera.position.z = 400;
				scene = new THREE.Scene();
				var texture = new THREE.Texture(canvas);
                texture.needsUpdate = true;
				var geometry = new THREE.BoxBufferGeometry( 5, 100, 250 );
				var material = new THREE.MeshBasicMaterial( { map: texture } );
                material.needsUpdate = true;
				mesh = new THREE.Mesh( geometry, material );
				scene.add( mesh );
				renderer = new THREE.WebGLRenderer( { antialias: true } );
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( window.innerWidth, window.innerHeight );
                renderer.setClearColor ('white', 1);
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
				mesh.rotation.x += 0.001;
				mesh.rotation.y += 0.005;
				renderer.render( scene, camera );
			}
          };


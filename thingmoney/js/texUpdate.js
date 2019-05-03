	      window.onload = function() {
  // all that code here

var camera, scene, renderer;
			var mesh;
              
            var currency = document.getElementById('currency').value;
              currency.needsUpdate = true;
            var amount = document.getElementById('amount').value;
            var name = document.getElementById('name').value;   
            var canvas = changeCanvas();
            var texture = new THREE.Texture(canvas);
              texture.needsUpdate = true;
              var material = new THREE.MeshBasicMaterial( { map: texture } );
                material.needsUpdate = true;
            window.addEventListener('keydown', changeCanvas, false );
              
			init();
			animate();
			function init() {
                
                			
            
            
            
            

				camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000 );
				camera.position.z = 400;
				scene = new THREE.Scene();
				
                
				var geometry = new THREE.BoxBufferGeometry( 5, 100, 250 );
				
				mesh = new THREE.Mesh( geometry, material );
				scene.add( mesh );
				renderer = new THREE.WebGLRenderer( { antialias: true } );
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( window.innerWidth, window.innerHeight );
                renderer.setClearColor ('white', 1);
				document.body.appendChild( renderer.domElement );
				
				window.addEventListener( 'resize', onWindowResize, false );
               
			}
			function onWindowResize() {
				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();
				renderer.setSize( window.innerWidth, window.innerHeight );
            }
              
            function changeCanvas() {
                console.log("key was pressed");
                 var canvas = document.createElement('canvas');
                 canvas.width = 500;
                canvas.height = 200;
            
                var context = canvas.getContext('2d');
                canvas.needsUpdate = true;
            
                context.fillStyle ="green";
                context.fillRect(0, 0, canvas.width, canvas.height);
                
            

                context.font = "Bold 40px Helvetica";
                context.lineWidth = 4;
                context.strokeStyle = 'rgba(255,255,255,.8)';
                context.fillStyle = "rgba(0,0,0,1)";
                context.strokeText(currency, 200, 100);
                context.fillText(currency, 200, 100); 
                context.strokeText(amount, 20, 50);
                context.fillText(amount, 20, 50); 
                context.strokeText(amount, 450, 50);
                context.fillText(amount, 450, 50); 
                context.strokeText(name, 200, 180);
                context.fillText(name, 200, 180); 
                
             
                
                return canvas;
            }
              
              
            function updateTex(){
              
//                console.log("key down");
//                var texture = new THREE.Texture(canvas);
//                texture.needsUpdate = true;
//                mesh.geometry.materials.map = texture;
//                texture.needsUpdate = true;
            }
              
              	function animate() {
              
				requestAnimationFrame( animate );
				mesh.rotation.x += 0.001;
				mesh.rotation.y += 0.005;
				renderer.render( scene, camera );
			}
          };


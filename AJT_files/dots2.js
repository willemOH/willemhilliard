window.onload = function() {

       
    
        var scene = null;
        var controls;
        var camera = null;
        var renderer = null;
        var mixer = null;
        var clock = new THREE.Clock();
    
       
        function init3D() {
            
            var container = document.getElementById("canvas")	
            var width = container.clientWidth;
            var height = container.clientHeight;
        
            const mouse = new THREE.Vector2();
            const target = new THREE.Vector2();
            const windowHalf = new THREE.Vector2( width, height );
				
			
            renderer = new THREE.WebGLRenderer();
            renderer.setSize( width, height );
            container.appendChild(renderer.domElement);
            
            
            scene = new THREE.Scene();
           
            camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);

            var ambientLight = new THREE.AmbientLight(0x080818);
            scene.add(ambientLight);

            var pointLight = new THREE.PointLight(0xffffff, 1, 100);
            pointLight.position.set(-5, 1, 5);
            scene.add(pointLight);

           camera.position.z = 3.5;
            camera.position.x = 1.5;
                camera.position.y = 2;
            controls = new THREE.OrbitControls( camera );
            controls.target.set( 0, 3, 0 );
			
            controls.minPolarAngle = 0.8;
		  controls.maxPolarAngle = 2.4;
		  controls.dampingFactor = 0.07;
		  controls.rotateSpeed = 0.07;
            
            
            controls.dispose();
            controls.update();
            
            canvas.addEventListener( 'mousemove', onCanvasMouseMove, false ); /* adding 'canvas' instead of 'document' to contain mouse move to the render window took you forever! you still don't know what 'scope' does though*/
            window.addEventListener( 'resize', onWindowResize, false );
            

        }
                
        function onCanvasMouseMove(event) {
            
	      controls.handleMouseMoveRotate(event);
            

        }
    
        function onWindowResize() {
				camera.aspect = width / height;
				camera.updateProjectionMatrix();
				renderer.setSize( width, height );
			}

        function loadScene() {              
            // Instantiate a loader
            var loader = new THREE.GLTFLoader();

            // Load a glTF resource
            loader.load('AJT_files/loading animation web.gltf',
                function (gltf) {
                    var model = gltf.scene;
                    model.rotation.y = - Math.PI / 3;
                    model.translateX( -.8 );
                    scene.add(model);
                   
                    
                    mixer = new THREE.AnimationMixer(model);
                    mixer.clipAction(gltf.animations[0]).play();
                    
                    render();
                });
            
        }

        
        function render() {
            
             controls.update();
            requestAnimationFrame(render);
            var delta = clock.getDelta();
            
            console.log(mixer.time);
            
            if ( mixer.time > 8 ) {
                camera.position.z = 3.5;
            camera.position.x = 1.5;
                camera.position.y = 2;
                mixer.time -= mixer.time;
            }
           
            if (mixer != null) {
                mixer.update(delta);
            };
            
            renderer.render(scene, camera);
            
        }

        init3D();
        loadScene();
    
};
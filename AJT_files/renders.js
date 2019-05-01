window.onload = function() {

       
    
        var scene = null;
        var controls;
        var camera = null;
        var renderer = null;
        var mixer = null;
        var clock = new THREE.Clock();
    
    
        var scene2 = null;
        var controls2;
        var camera2 = null;
        var renderer2 = null;
        var mixer2 = null;
        var clock2 = new THREE.Clock();
    
       
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
    
         function init3D_2() {
            
                  
             
           var container2 = document.getElementById("rat_canvas")	
            var width2 = container2.clientWidth;
            var height2 = container2.clientHeight;
        
            const mouse2 = new THREE.Vector2();
             const target2 = new THREE.Vector2();
             const windowHalf2 = new THREE.Vector2( width2, height2 );
            
            	
				
			
            renderer2 = new THREE.WebGLRenderer();
            renderer2.setSize( width2, height2 );
            container2.appendChild(renderer.domElement);
            
            
            scene2 = new THREE.Scene();
           
            camera2 = new THREE.PerspectiveCamera(50, width2 / height2, 0.1, 1000);

            /*
            var light = new THREE.AmbientLight(0xffffff, 100);
            scene.add(light);
            */
             
            var pointlight1 = new THREE.PointLight(0xffffff, .5);
            scene2.add(pointlight1);
            
            var pointlight2 = new THREE.PointLight(0xffffff, .5);
            pointlight2.position.set( 0, -10, 5 );
            scene2.add(pointlight2);
            
             var pointlight3 = new THREE.PointLight(0xffffff, .5);
            pointlight3.position.set( 3, 3, -10 );
            scene2.add(pointlight3);
            
            


           camera2.position.z = 10;
            camera2.position.x = 0;
                camera2.position.y = -8;
            controls2 = new THREE.OrbitControls( camera2 );
            controls2.target.set( 0, -6, -2 );
			
            controls2.minPolarAngle = 0.8;
		  controls2.maxPolarAngle = 2.4;
		  controls2.dampingFactor = 0.07;
		  controls2.rotateSpeed = 0.07;
            
            
            controls2.dispose();
            controls2.update();
            
            rat_canvas.addEventListener( 'mousemove', onCanvasMouseMove2, false ); /* adding 'canvas' instead of 'document' to contain mouse move to the render window took you forever! you still don't know what 'scope' does though*/
            window.addEventListener( 'resize', onWindowResize2, false );
            

            

        }
                
        function onCanvasMouseMove(event) {
            
	      controls.handleMouseMoveRotate(event);
            

        }
    
        function onCanvasMouseMove2(event) {
            
	      controls2.handleMouseMoveRotate(event);
            

        }
    
        function onWindowResize() {
				camera.aspect = width / height;
				camera.updateProjectionMatrix();
				renderer.setSize( width, height );
            
			}
    
     function onWindowResize2() {
            
                camera2.aspect = width2 / height2;
				camera2.updateProjectionMatrix();
				renderer2.setSize( width2, height2 );
			}

        function loadScene() {              
            // Instantiate a loader
            var loader = new THREE.GLTFLoader();
            var loader2 = new THREE.GLTFLoader();

            // Load a glTF resource
            loader.load('AJT_files/loading animation web.gltf',
                function (gltf) {
                    var model = gltf.scene;
                    model.rotation.y = - Math.PI / 3;
                    model.translateX( -.8 );
                    scene.add(model);
                   
                    
                    mixer = new THREE.AnimationMixer(model);
                    mixer.clipAction(gltf.animations[0]).play();
                    
                
                  var loader2 = new THREE.GLTFLoader();
                
                });

            // Load a glTF resource
            loader2.load('AJT_files/rat6.gltf',
                function (gltf2) {
                    var model2 = gltf2.scene;
                
                
                  
                    model2.scale.set(100,100,100);
                   // model.rotation.y = - Math.PI / 3;
                    model2.translateX(0);
                    model2.translateZ(-6);
                    model2.translateY(-6.5);
                    scene2.add(model2);
                   
                    
                    mixer2 = new THREE.AnimationMixer(model2);
                    mixer2.clipAction(gltf2.animations[0]).play();
                
                
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
            
            
            controls2.update();
            requestAnimationFrame(render);
            var delta2 = clock2.getDelta();
            
           
            
           
            if (mixer2 != null) {
                mixer2.update(delta2);
            };
            
            renderer.render(scene, camera);
            renderer2.render(scene2, camera2);
            
        }

        init3D();
        init3D_2();
        loadScene();
    
};
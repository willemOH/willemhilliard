window.onload = function() {

        
    
var scene = null;
        var controls;
        var camera = null;
        var renderer = null;
        var mixer = null;
        var clock = new THREE.Clock();
    
       
        function init3D() {
            //container = document.createElement( 'div' );
            //document.body.appendChild( container );
            
             
           var container = document.getElementById("rat_canvas")	
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

            /*
            var light = new THREE.AmbientLight(0xffffff, 100);
            scene.add(light);
            */
             
            var pointlight = new THREE.PointLight(0xffffff, .5);
            scene.add(pointlight);
            
            var pointlight2 = new THREE.PointLight(0xffffff, .5);
            pointlight2.position.set( 0, -10, 5 );
            scene.add(pointlight2);
            
             var pointlight3 = new THREE.PointLight(0xffffff, .5);
            pointlight3.position.set( 3, 3, -10 );
            scene.add(pointlight3);
            
            


           camera.position.z = 10;
            camera.position.x = 0;
                camera.position.y = -8;
            controls = new THREE.OrbitControls( camera );
            controls.target.set( 0, -6, -2 );
			
            controls.minPolarAngle = 0.8;
		  controls.maxPolarAngle = 1000;
		  controls.dampingFactor = 0.07;
		  controls.rotateSpeed = 0.07;
            
            
            controls.dispose();
            controls.update();
            
            rat_canvas.addEventListener( 'mousemove', onCanvasMouseMove, false ); /* adding 'canvas' instead of 'document' to contain mouse move to the render window took you forever! you still don't know what 'scope' does though*/
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
            loader.load('AJT_files/rat6.gltf',
                function (gltf) {
                    var model = gltf.scene;
                
                
                  
                    model.scale.set(100,100,100);
                   // model.rotation.y = - Math.PI / 3;
                    model.translateX(0);
                    model.translateZ(-6);
                    model.translateY(-6.5);
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
            
            /*
            if ( mixer.time > 8 ) {
                camera.position.z = 3.5;
            camera.position.x = 1.5;
                camera.position.y = 2;
                mixer.time -= mixer.time;
            }
            */
           
            if (mixer != null) {
                mixer.update(delta);
            };
            
            renderer.render(scene, camera);
            
        }

        init3D();
        loadScene();
    
};
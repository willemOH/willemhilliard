  var scene = null;
                var controls;
        var camera = null;
        var renderer = null;
        var mixer = null;
        var clock = new THREE.Clock();

        function init3D() {
            //container = document.createElement( 'div' );
            //document.body.appendChild( container );
            scene = new THREE.Scene();
            
            camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
            	
			
            var container = document.getElementById("canvas")	
            document.body.appendChild(container);

            renderer = new THREE.WebGLRenderer();	
            renderer.setSize( window.innerWidth/2, window.innerHeight/2 )
            container.appendChild(renderer.domElement);
            

            var ambientLight = new THREE.AmbientLight(0x080818);
            scene.add(ambientLight);

            var pointLight = new THREE.PointLight(0xffffff, 1, 100);
            pointLight.position.set(-5, 1, 5);
            scene.add(pointLight);

           camera.position.z = 3.5;
            camera.position.x = 1.5;
                camera.position.y = 2;
            controls = new THREE.OrbitControls( camera, renderer.domElement );
				controls.target.set( 0, 3, 0 );
				controls.update();
            
            window.addEventListener( 'resize', onWindowResize, false );

        }
                
        function onWindowResize() {
				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();
				renderer.setSize( window.innerWidth/2, window.innerHeight/2 );
			}

        function loadScene() {              
            // Instantiate a loader
            var loader = new THREE.GLTFLoader();

            // Load a glTF resource
            loader.load('AJT - Willem Hilliard_files/loading animation web.gltf',
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
            
            requestAnimationFrame(render);
            var delta = clock.getDelta();
            if (mixer != null) {
                mixer.update(delta);
            };
            renderer.render(scene, camera);
        }

        init3D();
        loadScene();
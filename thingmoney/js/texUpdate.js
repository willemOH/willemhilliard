	      window.onload = function refreshit() {


var camera, scene, renderer;
            var container;
			var mesh;
            var context; 
            var material;
            var currency = document.getElementById('currency').value;
            var amount = document.getElementById('amount').value;
            var name = document.getElementById('name').value;  
            var conditions = document.getElementById('conditions').value; 
            //var img = document.getElementById("image");

            var canvas;
            var increment = .001;
            var texture;
            var geometry;
            var loader = new THREE.ImageLoader();
           // var texloader = new THREE.CubeTextureLoader();
            
            //var image = new THREE.ImageLoader().load("../BILL.png");  
            var refresh = false;




             
            
          
              
            //window.addEventListener('keydown', changeCanvas, false );
            
            document.getElementById ("button").addEventListener ("click", refreshit, false);
              
            function refreshit(){
            console.log("yes");
            currency = document.getElementById('currency').value;
            amount = document.getElementById('amount').value;
            name = document.getElementById('name').value; 
            conditions = document.getElementById('conditions').value; 
            updateTex();
            refresh = true;
            mesh.material.map.needsUpdate = true;
            
            }
              
			init();
			animate();
              
			function init() {
                
				camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000 );
				camera.position.z = 250; //get psuedo div width as variable for @media?
				scene = new THREE.Scene();
				
                mesh = createBill();
				
				scene.add( mesh );
                
                container = document.getElementById( 'canvas' );
                document.body.appendChild( container );
                
				renderer = new THREE.WebGLRenderer( { antialias: true } );
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( window.innerWidth, window.innerHeight );
                renderer.setClearColor ('white', 1);
				//document.body.appendChild( renderer.domElement );
				container.appendChild( renderer.domElement );
                
				window.addEventListener( 'resize', onWindowResize, false );
               
			}
			function onWindowResize() {
				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();
				renderer.setSize( window.innerWidth, window.innerHeight );
            }
              
            function createBill() {
               
                canvas = document.createElement('canvas');
                canvas.width = 1000;
                canvas.height = 400;
            
                context = canvas.getContext('2d');
               
                
                
                var texture = new THREE.Texture(canvas);
                texture.needsUpdate = true;
                
//                var textureCube = loader.load( [
//	               canvas, canvas,
//                   canvas, canvas,
//	               canvas, canvas
//                ] );

                material = new THREE.MeshBasicMaterial( { map: texture } );
                material.needsUpdate = true;
                
                geometry = new THREE.BoxBufferGeometry( 1, 100, 250 );
				
				mesh = new THREE.Mesh( geometry, material );
                
                context.fillStyle = "rgb(72,166,87)";
                context.fillRect(0, 0, canvas.width, canvas.height);
                
                return mesh;
            }
              
           function updateTex(){
               
               loader.load(
               "../BILL.png",
                   function (image){
               
                context.clearRect(0, 0, canvas.width, canvas.height);
//                context.fillStyle = "rgb(72,166,87)";
//                context.fillRect(0, 0, canvas.width, canvas.height);
               context.drawImage(image, 0, 0);
               // context.createPattern(img, 'repeat');
                currency.needsUpdate = true;
                context.font = "Bold 40px Helvetica";
                context.lineWidth = 4;
                context.strokeStyle = 'rgba(255,255,255,.8)';
                context.fillStyle = "rgba(0,0,0,1)";
                context.textAlign = "center"; 
                context.lineWidth = 2;
                context.font = "30px Georgia";
                context.strokeText(conditions, 500, 290);
                context.fillText(conditions, 500, 290);
                context.lineWidth = 8;
                context.font = "140px Georgia";
                context.strokeText(currency, 500, 200);
                context.fillText(currency, 500, 200); 
                context.font = "40px Georgia";
               context.lineWidth = 4;
                context.strokeText(name, 500, 370);
                context.fillText(name, 500, 370);
                context.textAlign = "left";
                context.lineWidth = 4;
                context.font = "100px Georgia";
               
                context.strokeText(amount, 40, 100);
                context.fillText(amount, 40, 100); 
                context.strokeText(amount, 870, 100);
                context.fillText(amount, 870, 100); 
               
                context.lineWidth = 3;
                context.font = "60px Georgia";
                context.strokeText(amount, 60, 350);
                context.fillText(amount, 60, 350);
                context.strokeText(amount, 870, 350);
                context.fillText(amount, 870, 350); 
               
                
                       
                }
              )
               
               
               
//               var w=window.open('about:blank','image from canvas');
//               w.document.write("<img src='"+canvas.toDataURL("image/png")+"' alt='from canvas'/>");
               
           } 
              
//            function updateTex(){
//              
////                console.log("key down");
////                var texture = new THREE.Texture(canvas);
////                texture.needsUpdate = true;
////                mesh.geometry.materials.map = texture;
////                texture.needsUpdate = true;
//            }
              
              	function animate() {
              
				requestAnimationFrame( animate );
                console.log(mesh.rotation.x)  
				mesh.rotation.y += 0.001;
				
                mesh.rotation.x += increment;
                
                if(refresh = true)
                    {
                    updateTex();
                    refresh = false;
                    }
                    
                if (mesh.rotation.x >= .3)
                    {
                        increment = -0.001;
                    }
                else if (mesh.rotation.x <= 0)
                    {
                        increment =  0.001;
                    }
                    
				renderer.render( scene, camera );
			}
          };


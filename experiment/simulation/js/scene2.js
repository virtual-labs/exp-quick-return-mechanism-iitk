/**
 * 
 *  Document     : scene.js
 *  Created on   : 3 March, 2017, 4:45:25 PM
 *  Author       : Ujjal Dey
 *  Organization : IIT Kharagpur
 *  
 */
var quick_return = {
    scene: null,
    camera: null,
    container: null,
    stats: null,
    controls: null,
    renderer: null,
    CONTAINER_WIDTH: null,
    CONTAINER_HEIGHT: null,
    //link2Mesh: null,
    init: function () {

// create main scene
        this.scene = new THREE.Scene();
        this.container = document.getElementById("canvas3d-view");
        this.scene.position.set(-50, 80, 0);
        this.CONTAINER_WIDTH = this.container.offsetWidth;
        this.CONTAINER_HEIGHT = this.container.offsetHeight;

//  renderer
        this.renderer = new THREE.WebGLRenderer({antialias: true, alpha: false});
        this.renderer.setSize(this.CONTAINER_WIDTH, this.CONTAINER_HEIGHT);
        this.renderer.setClearColor(0x000000, 1); // Set the background color of the canvas to black
        this.renderer.shadowMapEnabled = true;
        this.renderer.shadowMapSoft = true;
        this.container.appendChild(this.renderer.domElement);

// camera
        var VIEW_ANGLE = 45, ASPECT = this.CONTAINER_WIDTH / this.CONTAINER_HEIGHT, NEAR = 1, FAR = 10000;
        this.camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);
        //this.camera.position.z = 500;
        this.camera.position.set(0, 0, 2500);   //
        //this.camera.lookAt(new THREE.Vector3(0, 0, 0));
        this.camera.lookAt(this.scene.position);
//        this.scene.add(this.camera);
//        
        // And some sort of controls to move around
        // We'll use one of THREE's provided control classes for simplicity
        this.controls = new THREE.TrackballControls(this.camera);
        this.controls.rotateSpeed = 5.0;
        this.controls.zoomSpeed = 1.2;
        this.controls.panSpeed = 0.8;
        this.controls.noZoom = false;
        this.controls.noPan = false;
        this.controls.staticMoving = true;
        this.controls.dynamicDampingFactor = 0.3;
        this.controls.keys = [65, 83, 68];
        this.controls.enabled = false;
        // this.controls.addEventListener('change', render);
// Stats preparing
//        this.stats = new Stats();
//        this.stats.domElement.style.position = 'absolute';
//        this.stats.domElement.style.top = '60px';
//        this.container.appendChild(this.stats.domElement);

// create scene

// Add axes, The X axis is red. The Y axis is green. The Z axis is blue.
        axes = buildAxes(200);
        //axes.position = mesh.position;
        this.scene.add(axes);

        // Cylinder1 = new THREE.Mesh(new THREE.CylinderGeometry(25, 25, 200, 100), new THREE.MeshNormalMaterial());
        // Cylinder1.rotation.x = Math.PI / 2;
        //quick_return.scene.add(Cylinder1);
        this.loader = new THREE.STLLoader();
        this.loader.load('vid16/vid16p4.STL', function (geometry) {
            geometry.applyMatrix(new THREE.Matrix4().makeTranslation(-5, -51, 0));
            l1material = new THREE.MeshBasicMaterial({color: '#008080'});
            l1mesh = new THREE.Mesh(geometry, l1material);
            //l1mesh.rotation.x = -Math.PI / 2;
            // l1mesh.position.set(850, 0, 0);
            quick_return.scene.add(l1mesh);
            Cylinder1 = new THREE.Mesh(new THREE.CylinderGeometry(25, 25, 30, 100), new THREE.MeshNormalMaterial({color: '#cbd2ef'}));
            Cylinder1.rotation.x = Math.PI / 2;
            Cylinder1.position.set(0, -130, 20);
            l1mesh.add(Cylinder1);

            Cylinder2 = new THREE.Mesh(new THREE.CylinderGeometry(25, 25, 30, 100), new THREE.MeshNormalMaterial({color: '#cbd2ef'}));
            Cylinder2.rotation.x = Math.PI / 2;
            Cylinder2.position.set(0, -730, 20);
            l1mesh.add(Cylinder2);

        });

//        Cylinder2 = new THREE.Mesh(new THREE.CylinderGeometry(5, 5, 20, 100), new THREE.MeshNormalMaterial());
//        // Cylinder2.rotation.x = Math.PI / 2;
//        Cylinder2.position.set(140, 0, 180);
//        //quick_return.scene.add(Cylinder2);
        this.loader = new THREE.STLLoader();
        this.loader.load('vid16/vid16p1.STL', function (geometry) {
            link2material = new THREE.MeshBasicMaterial({color: '#00bfff'});
            link2mesh = new THREE.Mesh(geometry, link2material);
            link2mesh.rotation.x = Math.PI / 2;
            link2mesh.rotation.z = Math.PI / 2;
            link2mesh.position.set(0, 105, 90);
            Cylinder1.add(link2mesh);

        });

        this.loader = new THREE.STLLoader();
        this.loader.load('vid16/vid16p2.STL', function (geometry) {
            link3material = new THREE.MeshBasicMaterial({color: '#3c3fff'});
            link3mesh = new THREE.Mesh(geometry, link3material);
            link3mesh.rotation.z = Math.PI / 2;
            link3mesh.rotation.x = -Math.PI / 2;
            //link3mesh.rotation.y = -Math.PI / 6;
            link3mesh.position.set(0, 60, -590);
            Cylinder2.add(link3mesh);

        });
//         this.loader = new THREE.STLLoader();

        this.loader.load('vid16/vid16p3.STL', function (geometry) {
            link4material = new THREE.MeshBasicMaterial({color: '#006633'});
            link4mesh = new THREE.Mesh(geometry, link4material);
            //link2mesh.rotation.z = -Math.PI / 6;
            link4mesh.position.set(0, 455, 50);
            quick_return.scene.add(link4mesh);
            Cylinder3 = new THREE.Mesh(new THREE.CylinderGeometry(26, 26, 100, 100), new THREE.MeshBasicMaterial({color: '#cbd2ef'}));
            Cylinder3.rotation.x = Math.PI / 2;
            Cylinder3.position.set(115, 585, 50);
            l1mesh.add(Cylinder3);
            Cylinder4 = new THREE.Mesh(new THREE.CylinderGeometry(26, 26, 100, 100), new THREE.MeshBasicMaterial({color: '#cbd2ef'}));
            Cylinder4.rotation.x = Math.PI / 2;
            Cylinder4.position.set(-120, 585, 50);
            l1mesh.add(Cylinder4);

            Cylinder5 = new THREE.Mesh(new THREE.CylinderGeometry(28, 28, 100, 100), new THREE.MeshBasicMaterial({color: '#cbd2ef'}));
            Cylinder5.rotation.x = Math.PI / 2;
            Cylinder5.position.set(575, 0, 0);
            link3mesh.add(Cylinder5);
        });
        Box = new THREE.Mesh(new THREE.BoxGeometry(500, 500, 50, 100), new THREE.MeshBasicMaterial({color: 0x663300}));

        Box.rotation.x = Math.PI / 2;
        Box.position.set(0, -350, 170);
        // quick_return.scene.add(Box);


        this.container.addEventListener('mouseover', onContainerMouseOver, false);
        this.container.addEventListener('mouseout', onContainerMouseOut, false);

//        document.addEventListener('mousemove', onContainerMouseMove, false);
//        document.addEventListener('mousedown', onContainerMouseDown, false);
//        document.addEventListener('keydown', onContainerKeyDown, false);
//        document.addEventListener('keyup', onContainerKeyUp, false);
//        document.addEventListener('touchstart', onDocumentTouchStart, false);
//        document.addEventListener('touchmove', onDocumentTouchMove, false);
    }
};

function onContainerMouseOver() {
    quick_return.controls.enabled = true;
}
function onContainerMouseOut() {
    quick_return.controls.enabled = false;
}
// Animate the scene
function animate() {
    //Cylinder2.rotation.y = 30 ;

    requestAnimationFrame(animate);
    quick_return.renderer.render(quick_return.scene, quick_return.camera);
    update();
    render();
}
// Update controls and stats
function update() {
//    AXISCubeScene.controls.update(AXISCubeScene.clock.getDelta());
    quick_return.controls.update();
    quick_return.stats.update();
}
// Render the scene
function render() {
    if (quick_return.renderer) {
        quick_return.renderer.render(quick_return.scene, quick_return.camera);
        //link2mesh.rotation.z = +10;
        // Cylinder2.rotation.y = -0.3 * Math.sin(3 * (Math.PI / 180));
        //Cylinder1.rotation.y = 30 * (Math.PI / 180);
        // Cylinder2.rotation.y = 30 ;

    }
}



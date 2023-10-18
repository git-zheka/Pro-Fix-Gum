import StyleCSS from './moreinfo.module.scss' 
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { apiURL, apiUrlProducts, MoreInfoAPI } from '../../api';

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default function MoreInfo() {
    const [product, setProduct] = useState({});
    const { id } = useParams();

    let scene, camera, renderer;
    useEffect(() => {
      MoreInfoAPI(id)
      .then(product => {
        setProduct(product)
      })
    }, []);
    window.scrollTo(0, 0);

    // useEffect (() => {
    //   scene = new THREE.Scene();
    //   camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    //   camera.position.z = 10;

    //   renderer = new THREE.WebGL1Renderer({alpha: true, antialias: true});
    //   renderer.setClearColor(0x000000,0);
    //   renderer.setSize(1280, 720);

    //   renderer.domELement.setAttribute("id", "3d");
    //   document.body.insertBefore(renderer.domELement, document.body.firstChild);

    //   const aLight = new THREE.AmbientLight(0x404040, 1.2);
    //   scene.add(aLight);

    //   const pLight = new THREE.PointLight(0xFFFFFF, 1.2);
    //   pLight.position.set(0,-3,7)
    //   scene.add(pLight)


    //   let loader = new THREE.GLTFLoader();
    //   let obj = null;

    //   loader.load('../../../heckler__koch_usp_pistol/scene.gltf', function(gltf) {
    //     obj= gltf;
    //     obj.scene.scale.set(1.3, 1.3, 1.3);

    //     scene.add(obj.scene);
    //   });

    //   function animate() {
    //     requestAnimationFrame(animate);

    //     if(obj){
    //       obj.scene.rotation.y += 0.03;
    //     }

    //     renderer.render(scene, camera);
    //   }

    //   animate();
    // }, [])


  return (
    <>
        <div className={StyleCSS.MoreInfo}>
            <div className={StyleCSS.VisualModel}>
                Canva
            </div>

            <div className={StyleCSS.DetailsInfo}>
                <h1>{product.name}</h1>
                <p1>{product.price}</p1><p2>грн</p2>
                <h3>Розміри:</h3>
                <h4>Висота: 10см</h4>
                <h4>Ширина: 8см</h4>
                <h4>Діаметир отворів: 0.6см</h4>

                <div className={StyleCSS.AddToBuy}>
                    <div className={StyleCSS.btnBuy}>Купити</div>
                    <p>Є у наявності</p>
                </div>
            </div>

            <div className={StyleCSS.Description}>
                <h2>Загальний опис</h2>
                <p>{product.description}</p>
            </div>
        </div>
    </>
  );
}
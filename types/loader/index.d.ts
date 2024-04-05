/**
 * THREE.Loader implementation for DXF files
 *
 * @param {*} manager THREE.LoadingManager
 *
 * @see https://threejs.org/docs/#api/en/loaders/Loader
 * @author Sourabh Soni / https://www.prolincur.com
 */
export class DXFLoader {
    constructor(manager: any);
    font: any;
    enableLayer: boolean;
    defaultColor: number;
    enableUnitConversion: boolean;
    setFont(font: any): this;
    setEnableLayer(enableLayer: any): this;
    setDefaultColor(color: any): this;
    setConsumeUnits(enable: any): void;
    load(url: any, onLoad: any, onProgress: any, onError: any): void;
    loadString(text: any, onLoad: any, onError: any): void;
    parse(text: any): any;
    /**
     * @param {Object} data - the dxf object
     * @param {Object} font - a font loaded with THREE.FontLoader
     * @constructor
     */
    loadEntities(data: any, options?: this): {
        entity: any;
        dxf: any;
    };
}
import ThreeEx from './extend';
export { ThreeEx as THREEx };

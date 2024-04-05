/**
 * Viewer class for a dxf object.
 * @param {Object} data - the dxf object
 * @param {Object} parent - the parent element to which we attach the rendering canvas
 * @param {Number} width - width of the rendering canvas in pixels
 * @param {Number} height - height of the rendering canvas in pixels
 * @param {Object} font - a font loaded with THREE.FontLoader
 * @constructor
 */
export function Viewer(data: any, parent: any, width: number, height: number, font: any): void;
export class Viewer {
    /**
     * Viewer class for a dxf object.
     * @param {Object} data - the dxf object
     * @param {Object} parent - the parent element to which we attach the rendering canvas
     * @param {Number} width - width of the rendering canvas in pixels
     * @param {Number} height - height of the rendering canvas in pixels
     * @param {Object} font - a font loaded with THREE.FontLoader
     * @constructor
     */
    constructor(data: any, parent: any, width: number, height: number, font: any);
    renderer: any;
    render: () => void;
    resize: (width: any, height: any) => void;
}
import THREEx from '../loader/extend';
export { THREEx };

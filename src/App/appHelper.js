import { fabric } from "fabric";

const appHelper = {
    getShapesList: () => (
        [
            "rectangle",
            "triangle",
            "circle",
        ]
    ),

    getFabricShape(shapeName = "") {
        let fabricShape = () => ({});

        switch(shapeName) {
            case "rectangle":
                fabricShape = fabric.Rect;
                break;

            case "triangle":
                fabricShape = fabric.Triangle;
                break;
            
            case "circle": 
                fabricShape = fabric.Circle;
                break;

            default:
                fabricShape = fabric.Rect;
                break;
        }

        return fabricShape;
    },
};

export default appHelper;
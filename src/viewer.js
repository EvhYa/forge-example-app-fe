/* global Autodesk, THREE */
import { getAccessToken } from "./api";

export const initViewer = (container) => {
   return new Promise(function (resolve, reject) {
      Autodesk.Viewing.Initializer({ getAccessToken }, function () {
         const config = {
            extensions: ["Autodesk.DocumentBrowser"],
         };
         const viewer = new Autodesk.Viewing.GuiViewer3D(container, config);
         viewer.start();
         viewer.setTheme("light-theme");
         resolve(viewer);
      });
   });
};

export const loadModel = (viewer, urn) => {
   return new Promise(function (resolve, reject) {
      function onDocumentLoadSuccess(doc) {
         resolve(viewer.loadDocumentNode(doc, doc.getRoot().getDefaultGeometry()));
      }
      function onDocumentLoadFailure(code, message, errors) {
         reject({ code, message, errors });
      }
      viewer.setLightPreset(0);
      Autodesk.Viewing.Document.load("urn:" + urn, onDocumentLoadSuccess, onDocumentLoadFailure);
   });
};

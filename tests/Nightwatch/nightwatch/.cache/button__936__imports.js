
      // THIS IS GENERATED FILE. DO NOT EDIT IT!
      // THIS FILE SHOULD NOT BE ADDED TO THE VERSION CONTROL SYSTEM.

      
      import * as React from 'react';
      import * as ReactDOM from "react-dom/client";
    
      import "/node_modules/vite-plugin-nightwatch/nightwatch/describe.js";
      
      import _csfDescription, { ButtonInfo as Component } from '/test/button.jsx';
      
           
      
      const renderReactElement = 'createRoot' in ReactDOM
        ? (element, container) =>
            ReactDOM
              .createRoot(container)
              .render(element)
        : ReactDOM.render;
    
      
			const isComponentDefaultExported = typeof _csfDescription === 'undefined';
			
			const commonArgs = isComponentDefaultExported ? {} : (_csfDescription.args || {});
			const componentArgs = Component.args || {};
      const inlineProps = null || {};
      
      const props = { ...commonArgs, ...componentArgs, ...inlineProps };
		
      
      const element = React.createElement(Component, props);
      const canvasElement = document.getElementById('app');
      renderReactElement(element, canvasElement);
      
      window.__nightwatch = {};
       
      window['@component_class'] = Component;
      window['@component_element'] = element;
      window['@@component_props'] = props;
      window['@@canvas_element'] = canvasElement;
      window['@@playfn_result'] = null;
      window.__$$PlayFnError = null;
      window.__$$PlayFnDone = false;         
    
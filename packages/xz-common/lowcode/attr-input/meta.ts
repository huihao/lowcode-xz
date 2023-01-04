
import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const AttrInputMeta: ComponentMetadata = {
  "componentName": "AttrInput",
  "title": "AttrInput",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "@wuhuihao/xz-common",
    "version": "0.0.1",
    "exportName": "AttrInput",
    "main": "src/index.tsx",
    "destructuring": true,
    "subName": ""
  },
  "configure": {
    "props": [
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "attrName",
            "zh-CN": "attrName"
          }
        },
        "name": "attrName",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": true,
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "attrKey",
            "zh-CN": "attrKey"
          }
        },
        "name": "attrKey",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": true,
          "initialValue": ""
        }
      }
    ],
    "supports": {
      "style": true
    },
    "component": {}
  }
};
const snippets: Snippet[] = [
  {
    "title": "AttrInput",
    "screenshot": "",
    "schema": {
      "componentName": "AttrInput",
      "props": {}
    }
  }
];

export default {
  ...AttrInputMeta,
  snippets
};


import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const CommoditySelectorMeta: ComponentMetadata = {
  "componentName": "CommoditySelector",
  "title": "CommoditySelector",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "xz-common",
    "version": "0.1.0",
    "exportName": "CommoditySelector",
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
            "en-US": "type",
            "zh-CN": "type"
          }
        },
        "name": "type",
        "setter": {
          "componentName": "RadioGroupSetter",
          "props": {
            "dataSource": [
              {
                "label": "normal",
                "value": "normal"
              },
              {
                "label": "advanced",
                "value": "advanced"
              }
            ],
            "options": [
              {
                "label": "normal",
                "value": "normal"
              },
              {
                "label": "advanced",
                "value": "advanced"
              }
            ]
          },
          "isRequired": true,
          "initialValue": "normal"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "limit",
            "zh-CN": "limit"
          }
        },
        "name": "limit",
        "setter": {
          "componentName": "NumberSetter",
          "isRequired": false,
          "initialValue": 0
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "dataSource",
            "zh-CN": "dataSource"
          }
        },
        "name": "dataSource",
        "setter": {
          "componentName": "ArraySetter",
          "props": {
            "itemSetter": {
              "componentName": "MixedSetter",
              "isRequired": false,
              "props": {}
            }
          },
          "isRequired": true,
          "initialValue": []
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "columns",
            "zh-CN": "columns"
          }
        },
        "name": "columns",
        "setter": {
          "componentName": "ArraySetter",
          "props": {
            "itemSetter": {
              "componentName": "MixedSetter",
              "isRequired": false,
              "props": {}
            }
          },
          "isRequired": true,
          "initialValue": []
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "style",
            "zh-CN": "style"
          }
        },
        "name": "style",
        "setter": {
          "componentName": "RadioGroupSetter",
          "props": {
            "dataSource": [
              {
                "label": "object",
                "value": "object"
              }
            ],
            "options": [
              {
                "label": "object",
                "value": "object"
              }
            ]
          },
          "initialValue": "object"
        }
      }
    ],
    "supports": {},
    "component": {}
  }
};
const snippets: Snippet[] = [
  {
    "title": "CommoditySelector",
    "screenshot": "",
    "schema": {
      "componentName": "CommoditySelector",
      "props": {}
    }
  }
];

export default {
  ...CommoditySelectorMeta,
  snippets
};

import { NativeScriptConfig } from '@nativescript/core';

export default {
  id: 'org.arushsharma24.quickpdf',
  appPath: 'app',
  appResourcesPath: 'App_Resources',
  android: {
    v8Flags: '--expose_gc',
    markingMode: 'none'
  },
  title: 'Quick PDF',
  version: '0.1.0',
  author: {
    name: 'Arush Sharma',
    email: 'arush24astar@gmail.com'
  },
  description: 'A quick PDF opener'
} as NativeScriptConfig;
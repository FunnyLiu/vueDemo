return {
  mode: 'development',
  context: '/Users/liufang/openSource/FunnyLiu/vueDemo/vueCliDemo/vueCliBase/basic',
  devtool: 'cheap-module-eval-source-map',
  node:
  {
    setImmediate: false,
    process: 'mock',
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  },
  output:
  {
    path: '/Users/liufang/openSource/FunnyLiu/vueDemo/vueCliDemo/vueCliBase/basic/dist',
    filename: '[name].js',
    publicPath: '/',
    globalObject: 'this'
  },
  resolve:
  {
    alias:
    {
      '@': '/Users/liufang/openSource/FunnyLiu/vueDemo/vueCliDemo/vueCliBase/basic/src',
      'vue$': 'vue/dist/vue.runtime.esm.js'
    },
    extensions: ['.mjs', '.js', '.jsx', '.vue', '.json', '.wasm', '.ts', '.tsx'],
    modules:
      ['node_modules',
        '/Users/liufang/openSource/FunnyLiu/vueDemo/vueCliDemo/vueCliBase/basic/node_modules',
        '/Users/liufang/openSource/FunnyLiu/vueDemo/vueCliDemo/vueCliBase/basic/node_modules/@vue/cli-service/node_modules']
  },
  resolveLoader:
  {
    modules:
      ['/Users/liufang/openSource/FunnyLiu/vueDemo/vueCliDemo/vueCliBase/basic/node_modules/@vue/cli-plugin-typescript/node_modules',
        '/Users/liufang/openSource/FunnyLiu/vueDemo/vueCliDemo/vueCliBase/basic/node_modules/@vue/cli-plugin-eslint/node_modules',
        '/Users/liufang/openSource/FunnyLiu/vueDemo/vueCliDemo/vueCliBase/basic/node_modules/@vue/cli-plugin-babel/node_modules',
        'node_modules',
        '/Users/liufang/openSource/FunnyLiu/vueDemo/vueCliDemo/vueCliBase/basic/node_modules',
        '/Users/liufang/openSource/FunnyLiu/vueDemo/vueCliDemo/vueCliBase/basic/node_modules/@vue/cli-service/node_modules']
  },
  module:
  {
    noParse: /^(vue|vue-router|vuex|vuex-router-sync)$/,
    rules:
      [{ test: /\.vue$/, use: [[Object], [Object]] },
      { test: /\.(png|jpe?g|gif|webp)(\?.*)?$/, use: [[Object]] },
      { test: /\.(svg)(\?.*)?$/, use: [[Object]] },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: [[Object]]
      },
      { test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i, use: [[Object]] },
      { test: /\.pug$/, use: [[Object]] },
      {
        test: /\.css$/,
        oneOf: [[Object], [Object], [Object], [Object]]
      },
      {
        test: /\.p(ost)?css$/,
        oneOf: [[Object], [Object], [Object], [Object]]
      },
      {
        test: /\.scss$/,
        oneOf: [[Object], [Object], [Object], [Object]]
      },
      {
        test: /\.sass$/,
        oneOf: [[Object], [Object], [Object], [Object]]
      },
      {
        test: /\.less$/,
        oneOf: [[Object], [Object], [Object], [Object]]
      },
      {
        test: /\.styl(us)?$/,
        oneOf: [[Object], [Object], [Object], [Object]]
      },
      {
        test: /\.m?jsx?$/,
        exclude: [[Function]],
        use: [[Object], [Object]]
      },
      {
        enforce: 'pre',
        test: /\.(vue|(j|t)sx?)$/,
        exclude:
          [/node_modules/,
            '/Users/liufang/openSource/FunnyLiu/vueDemo/vueCliDemo/vueCliBase/basic/node_modules/@vue/cli-service/lib'],
        use: [[Object]]
      },
      { test: /\.ts$/, use: [[Object], [Object], [Object]] },
      { test: /\.tsx$/, use: [[Object], [Object], [Object]] }]
  },
  plugins:
    [VueLoaderPlugin {},
      DefinePlugin {
        definitions:
          { 'process.env': { NODE_ENV: '"development"', BASE_URL: '"/"' } }
      },
      CaseSensitivePathsPlugin {
        options: {},
        pathCache: {},
        fsOperations: 0,
        primed: false,
        compiler:
          Compiler {
        _pluginCompat:
          SyncBailHook {
        _args: [Array],
        taps: [Array],
        interceptors: [],
        call: [Function: lazyCompileHook],
        promise: [Function: lazyCompileHook],
        callAsync: [Function: lazyCompileHook],
        _x: undefined
      },
      hooks:
      {
        shouldEmit: [Object],
        done: [Object],
        additionalPass: [Object],
        beforeRun: [Object],
        run: [Object],
        emit: [Object],
        afterEmit: [Object],
        thisCompilation: [Object],
        compilation: [Object],
        normalModuleFactory: [Object],
        contextModuleFactory: [Object],
        beforeCompile: [Object],
        compile: [Object],
        make: [Object],
        afterCompile: [Object],
        watchRun: [Object],
        failed: [Object],
        invalid: [Object],
        watchClose: [Object],
        environment: [Object],
        afterEnvironment: [Object],
        afterPlugins: [Object],
        afterResolvers: [Object],
        entryOption: [Object],
        forkTsCheckerServiceBeforeStart: [Object],
        forkTsCheckerCancel: [Object],
        forkTsCheckerServiceStartError: [Object],
        forkTsCheckerWaiting: [Object],
        forkTsCheckerServiceStart: [Object],
        forkTsCheckerReceive: [Object],
        forkTsCheckerServiceOutOfMemory: [Object],
        forkTsCheckerEmit: [Object],
        forkTsCheckerDone: [Object]
      },
      name: undefined,
      parentCompilation: undefined,
      outputPath: '/Users/liufang/openSource/FunnyLiu/vueDemo/vueCliDemo/vueCliBase/basic/dist',
      outputFileSystem:
      NodeOutputFileSystem {
        mkdirp: [Object],
        mkdir: [Function: bound],
        rmdir: [Function: bound],
        unlink: [Function: bound],
        writeFile: [Function: bound],
        join: [Function: bound join]
      },
      inputFileSystem:
      CachedInputFileSystem {
        fileSystem: NodeJsInputFileSystem {},
      _statStorage: [Object],
      _readdirStorage: [Object],
      _readFileStorage: [Object],
      _readJsonStorage: [Object],
      _readlinkStorage: [Object],
      _stat: [Function: bound bound],
      _statSync: [Function: bound bound],
      _readdir: [Function: bound readdir],
      _readdirSync: [Function: bound readdirSync],
      _readFile: [Function: bound bound readFile],
      _readFileSync: [Function: bound bound],
      _readJson: [Function],
      _readJsonSync: [Function],
      _readlink: [Function: bound bound],
      _readlinkSync: [Function: bound bound] },
  recordsInputPath: undefined,
    recordsOutputPath: undefined,
      records: { },
removedFiles: Set { },
fileTimestamps: Map { },
contextTimestamps: Map { },
resolverFactory:
ResolverFactory {
  _pluginCompat: [Object],
    hooks: [Object],
      cache1: WeakMap { },
  cache2: Map { }
},
resolvers: { normal: [Object], loader: [Object], context: [Object] },
options:
{
  mode: 'development',
    context: '/Users/liufang/openSource/FunnyLiu/vueDemo/vueCliDemo/vueCliBase/basic',
      devtool: 'cheap-module-eval-source-map',
        node: [Object],
          output: [Object],
            resolve: [Object],
              resolveLoader: [Object],
                module: [Object],
                  plugins: [Circular],
                    entry: [Object],
                      cache: true,
                        target: 'web',
                          performance: false,
                            optimization: [Object]
},
context: '/Users/liufang/openSource/FunnyLiu/vueDemo/vueCliDemo/vueCliBase/basic',
  requestShortener:
RequestShortener {
  currentDirectoryRegExp: /(^|!)\/Users\/liufang\/openSource\/FunnyLiu\/vueDemo\/vueCliDemo\/vueCliBase\/basic/g,
    parentDirectoryRegExp: /(^|!)\/Users\/liufang\/openSource\/FunnyLiu\/vueDemo\/vueCliDemo\/vueCliBase/g,
      buildinsAsModule: true,
        buildinsRegExp: /(^|!)\/Users\/liufang\/openSource\/FunnyLiu\/vueDemo\/vueCliDemo\/vueCliBase\/basic\/node_modules\/webpack/g,
          cache: Map { }
},
running: false,
  watchMode: false,
    watchFileSystem:
NodeWatchFileSystem {
  inputFileSystem: [Object],
    watcherOptions: [Object],
      watcher: [Object]
},
dependencies: undefined } },
FriendlyErrorsWebpackPlugin {
  compilationSuccessInfo: { },
  onErrors: undefined,
    shouldClearConsole: true,
      formatters:
  [[Function: format],
  [Function: format],
  [Function: format],
  [Function]],
    transformers:
  [[Function: transform],
  [Function: transform],
  [Function: transform],
  [Function]],
    previousEndTimes: { }
},
HotModuleReplacementPlugin {
  options: { },
  multiStep: undefined,
    fullBuildTimeout: 200,
      requestTimeout: 10000
},
ProgressPlugin {
  profile: false,
    handler: undefined,
      modulesCount: 500,
        showEntries: false,
          showModules: true,
            showActiveModules: true
},
HtmlWebpackPlugin {
  options:
  {
    template: '/Users/liufang/openSource/FunnyLiu/vueDemo/vueCliDemo/vueCliBase/basic/node_modules/html-webpack-plugin/lib/loader.js!/Users/liufang/openSource/FunnyLiu/vueDemo/vueCliDemo/vueCliBase/basic/public/index.html',
      templateParameters: [Function: templateParameters],
        filename: 'index.html',
          hash: false,
            inject: true,
              compile: true,
                favicon: false,
                  minify: false,
                    cache: true,
                      showErrors: true,
                        chunks: 'all',
                          excludeChunks: [],
                            chunksSortMode: 'auto',
                              meta: { },
    title: 'Webpack App',
      xhtml: false
  }
},
HtmlPwaPlugin {
  options:
  {
    iconPaths:
    {
      favicon32: 'img/icons/favicon-32x32.png',
        favicon16: 'img/icons/favicon-16x16.png',
          appleTouchIcon: 'img/icons/apple-touch-icon-152x152.png',
            maskIcon: 'img/icons/safari-pinned-tab.svg',
              msTileImage: 'img/icons/msapplication-icon-144x144.png'
    },
    name: 'basic',
      themeColor: '#4DBA87',
        msTileColor: '#000000',
          appleMobileWebAppCapable: 'no',
            appleMobileWebAppStatusBarStyle: 'default',
              assetsVersion: '',
                manifestPath: 'manifest.json'
  }
},
PreloadPlugin {
  options:
  {
    rel: 'preload',
      include: 'initial',
        excludeHtmlNames: [],
          fileBlacklist: [/\.map$/, /hot-update\.js$/]
  }
},
PreloadPlugin {
  options:
  {
    rel: 'prefetch',
      include: 'asyncChunks',
        excludeHtmlNames: [],
          fileBlacklist: [/\.map/]
  }
},
{ apply: [Function: apply] },
ForkTsCheckerWebpackPlugin {
  options:
  {
    vue: true,
      tslint: false,
        formatter: 'codeframe',
          checkSyntacticErrors: false
  },
  tsconfig: './tsconfig.json',
    compilerOptions: { },
  tslint: undefined,
    tslintAutoFix: false,
      watch: [],
        ignoreDiagnostics: [],
          ignoreLints: [],
            reportFiles: [],
              logger:
  Console {
    log: [Function: bound consoleCall],
      info: [Function: bound consoleCall],
        warn: [Function: bound consoleCall],
          error: [Function: bound consoleCall],
            dir: [Function: bound consoleCall],
              time: [Function: bound consoleCall],
                timeEnd: [Function: bound consoleCall],
                  trace: [Function: bound consoleCall],
                    assert: [Function: bound consoleCall],
                      clear: [Function: bound consoleCall],
                        count: [Function: bound consoleCall],
                          countReset: [Function: bound countReset],
                            group: [Function: bound consoleCall],
                              groupCollapsed: [Function: bound consoleCall],
                                groupEnd: [Function: bound consoleCall],
                                  Console: [Function: Console],
                                    debug: [Function: debug],
                                      dirxml: [Function: dirxml],
                                        table: [Function: table],
                                          markTimeline: [Function: markTimeline],
                                            profile: [Function: profile],
                                              profileEnd: [Function: profileEnd],
                                                timeline: [Function: timeline],
                                                  timelineEnd: [Function: timelineEnd],
                                                    timeStamp: [Function: timeStamp],
                                                      context: [Function: context],
                                                        [Symbol(counts)]: Map { }
  },
  silent: false,
    async: true,
      checkSyntacticErrors: false,
        workersNumber: 1,
          memoryLimit: 2048,
            useColors: true,
              colors: Chalk { level: 3, enabled: true },
  formatter: [Function: codeframeFormatter],
    tsconfigPath: '/Users/liufang/openSource/FunnyLiu/vueDemo/vueCliDemo/vueCliBase/basic/tsconfig.json',
      tslintPath: undefined,
        watchPaths: [],
          compiler:
  Compiler {
    _pluginCompat:
    SyncBailHook {
      _args: [Array],
        taps: [Array],
          interceptors: [],
            call: [Function: lazyCompileHook],
              promise: [Function: lazyCompileHook],
                callAsync: [Function: lazyCompileHook],
                  _x: undefined
    },
    hooks:
    {
      shouldEmit: [Object],
        done: [Object],
          additionalPass: [Object],
            beforeRun: [Object],
              run: [Object],
                emit: [Object],
                  afterEmit: [Object],
                    thisCompilation: [Object],
                      compilation: [Object],
                        normalModuleFactory: [Object],
                          contextModuleFactory: [Object],
                            beforeCompile: [Object],
                              compile: [Object],
                                make: [Object],
                                  afterCompile: [Object],
                                    watchRun: [Object],
                                      failed: [Object],
                                        invalid: [Object],
                                          watchClose: [Object],
                                            environment: [Object],
                                              afterEnvironment: [Object],
                                                afterPlugins: [Object],
                                                  afterResolvers: [Object],
                                                    entryOption: [Object],
                                                      forkTsCheckerServiceBeforeStart: [Object],
                                                        forkTsCheckerCancel: [Object],
                                                          forkTsCheckerServiceStartError: [Object],
                                                            forkTsCheckerWaiting: [Object],
                                                              forkTsCheckerServiceStart: [Object],
                                                                forkTsCheckerReceive: [Object],
                                                                  forkTsCheckerServiceOutOfMemory: [Object],
                                                                    forkTsCheckerEmit: [Object],
                                                                      forkTsCheckerDone: [Object]
    },
    name: undefined,
      parentCompilation: undefined,
        outputPath: '/Users/liufang/openSource/FunnyLiu/vueDemo/vueCliDemo/vueCliBase/basic/dist',
          outputFileSystem:
    NodeOutputFileSystem {
      mkdirp: [Object],
        mkdir: [Function: bound],
          rmdir: [Function: bound],
            unlink: [Function: bound],
              writeFile: [Function: bound],
                join: [Function: bound join]
    },
    inputFileSystem:
    CachedInputFileSystem {
      fileSystem: NodeJsInputFileSystem { },
      _statStorage: [Object],
        _readdirStorage: [Object],
          _readFileStorage: [Object],
            _readJsonStorage: [Object],
              _readlinkStorage: [Object],
                _stat: [Function: bound bound],
                  _statSync: [Function: bound bound],
                    _readdir: [Function: bound readdir],
                      _readdirSync: [Function: bound readdirSync],
                        _readFile: [Function: bound bound readFile],
                          _readFileSync: [Function: bound bound],
                            _readJson: [Function],
                              _readJsonSync: [Function],
                                _readlink: [Function: bound bound],
                                  _readlinkSync: [Function: bound bound]
    },
    recordsInputPath: undefined,
      recordsOutputPath: undefined,
        records: { },
    removedFiles: Set { },
    fileTimestamps: Map { },
    contextTimestamps: Map { },
    resolverFactory:
    ResolverFactory {
      _pluginCompat: [Object],
        hooks: [Object],
          cache1: WeakMap { },
      cache2: Map { }
    },
    resolvers: { normal: [Object], loader: [Object], context: [Object] },
    options:
    {
      mode: 'development',
        context: '/Users/liufang/openSource/FunnyLiu/vueDemo/vueCliDemo/vueCliBase/basic',
          devtool: 'cheap-module-eval-source-map',
            node: [Object],
              output: [Object],
                resolve: [Object],
                  resolveLoader: [Object],
                    module: [Object],
                      plugins: [Circular],
                        entry: [Object],
                          cache: true,
                            target: 'web',
                              performance: false,
                                optimization: [Object]
    },
    context: '/Users/liufang/openSource/FunnyLiu/vueDemo/vueCliDemo/vueCliBase/basic',
      requestShortener:
    RequestShortener {
      currentDirectoryRegExp: /(^|!)\/Users\/liufang\/openSource\/FunnyLiu\/vueDemo\/vueCliDemo\/vueCliBase\/basic/g,
        parentDirectoryRegExp: /(^|!)\/Users\/liufang\/openSource\/FunnyLiu\/vueDemo\/vueCliDemo\/vueCliBase/g,
          buildinsAsModule: true,
            buildinsRegExp: /(^|!)\/Users\/liufang\/openSource\/FunnyLiu\/vueDemo\/vueCliDemo\/vueCliBase\/basic\/node_modules\/webpack/g,
              cache: Map { }
    },
    running: false,
      watchMode: false,
        watchFileSystem:
    NodeWatchFileSystem {
      inputFileSystem: [Object],
        watcherOptions: [Object],
          watcher: [Object]
    },
    dependencies: undefined
  },
  started: undefined,
    elapsed: undefined,
      cancellationToken: undefined,
        isWatching: false,
          checkDone: false,
            compilationDone: false,
              diagnostics: [],
                lints: [],
                  emitCallback: [Function: noopEmitCallback],
                    doneCallback: [Function: doneCallback],
                      typescriptVersion: '3.3.4000',
                        tslintVersion: undefined,
                          vue: true
} ],
entry:
{
  app:
  ['/Users/liufang/openSource/FunnyLiu/vueDemo/vueCliDemo/vueCliBase/basic/node_modules/webpack-dev-server/client/index.js?http://10.242.0.183:8080/sockjs-node',
    '/Users/liufang/openSource/FunnyLiu/vueDemo/vueCliDemo/vueCliBase/basic/node_modules/webpack/hot/dev-server.js',
    './src/main.ts']
} }
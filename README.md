# 基于

Angular 18

arco-design 2.40.0

arco-design/color 0.4.0

该项目仅为练习使用
# PNPM
需要进行以下设置才能正常执行build:lib

.npmrc
```conf
enable-pre-post-scripts=true
```

可以在构建成功后把readme复制到dist目录下

# 利用pnpm link将本地包加入到项目依赖中

方便使用doc项目对组件进行调试

```shell
pnpm link ./dist/arco-design-angular
```

## public-api.ts 和 public-api.ts
目前实验来看没发现什么区别, 但是如果你只写了public-api.ts, ng会自动帮你生成index.ts
